import React from 'react'

import { useState, createContext, ReactNode } from 'react'

import { useJwt } from 'react-jwt'

import { customers } from '../services/api'

import { Customer } from '../types/customer'
import { LoginForm } from '../types/loginForm'
import { RegisterForm } from '../types/registerForm'

interface AuthContextData {
  customer: Customer
  isAuthenticated: boolean
  decodedToken: Object
  isExpired: boolean
  validateAuth: () => boolean
  prepareJWT: (JWT: string) => void
  handleLogin: (login: LoginForm) => Promise<void>
  handleLogout: () => void
  handleRegister: (register: RegisterForm) => Promise<void>
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [customer, setCustomer] = useState({} as Customer)
  const [JWT, setJWT] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const { decodedToken, isExpired } = useJwt(JWT)

  const handleLogin = async (login: LoginForm) => {
    const { data } = await customers.post('/customers/token', login)
    setCustomer(data.customer)
    setJWT(data.jwt)
    handleAuth(data.jwt)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setJWT('')
    setCustomer({} as Customer)
    setIsAuthenticated(false)
  }
  
  const handleRegister = async (register: RegisterForm) => {
    await customers.post('/customers', register)
    await handleLogin({ 
      email: register.email, 
      password: register.password 
    })
  }

  const handleAuth = (jwt: string) => {
    if (!JWT || isExpired) {
      localStorage.setItem('token', jwt)
      setIsAuthenticated(true)
    }
    
    validateAuth()
  }
  
  const validateAuth = () => {
    if (JWT) {
      if (!isExpired) {
        revalidateCustomer(JWT)
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
    const { data } = await customers.get('/customers/token', {
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
        handleRegister
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}