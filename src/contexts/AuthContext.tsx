import React from 'react'

import { useState, createContext, ReactNode } from 'react'

import { useJwt } from 'react-jwt'

import { customers } from '../services/api'

import { ICustomer, ILoginForm, IRegisterForm } from '../types/context'

interface AuthContextData {
  customer: ICustomer
  isAuthenticated: boolean
  decodedToken: Object
  isExpired: boolean
  validateAuth: () => Promise<boolean>
  prepareJWT: (JWT: string) => void
  handleLogin: (login: ILoginForm) => Promise<void>
  handleLogout: () => void
  handleRegister: (register: IRegisterForm) => Promise<void>
  updateAvatarUrl: (avatar_url: string) => void
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [customer, setCustomer] = useState({} as ICustomer)
  const [JWT, setJWT] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const { decodedToken, isExpired } = useJwt(JWT)

  const updateAvatarUrl = (avatar_url: string) => {
    setCustomer({
      id: customer.id,
      created_at: customer.created_at,
      devices: customer.devices,
      login: customer.login,
      name: customer.name,
      avatar_url
    })
  }

  const handleLogin = async (login: ILoginForm) => {
    const { data } = await customers.post('/api/customers/token', login)
    setCustomer(data.customer)
    setJWT(data.jwt)
    await handleAuth(data.jwt)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setJWT('')
    setCustomer({} as ICustomer)
    setIsAuthenticated(false)
  }
  
  const handleRegister = async (register: IRegisterForm) => {
    await customers.post('/api/customers', register)
    await handleLogin({ 
      email: register.email, 
      password: register.password 
    })
  }

  const handleAuth = async (jwt: string) => {
    if (!JWT || isExpired) {
      localStorage.setItem('token', jwt)
      setIsAuthenticated(true)
    }
    
    await validateAuth()
  }
  
  const validateAuth = async () => {
    if (JWT) {
      if (!isExpired) {
        await revalidateCustomer(JWT)
        setTimeout(() => {}, 2000)
        return true
      } else {
        return false
      }
    }
    return !isExpired
  }

  const prepareJWT = (JWT: string) => {
    setJWT(JWT)
  }

  const revalidateCustomer = async (jwt: string) => {
    const { data } = await customers.get('/api/customers/token', {
      headers: {
        'jwt': jwt
      }
    })
    setCustomer(data)
    setIsAuthenticated(true)
  }

  return (
    <AuthContext.Provider
      value={{
        customer,
        decodedToken,
        isExpired,
        prepareJWT,
        isAuthenticated,
        validateAuth,
        handleLogin,
        handleLogout,
        handleRegister,
        updateAvatarUrl
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}