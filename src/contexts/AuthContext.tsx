import React from 'react'

import { useState, createContext, ReactNode } from 'react'

import { customers } from '../services/api'

import { Customer } from '../types/customer'
import { LoginForm } from '../types/loginForm'
import { RegisterForm } from '../types/registerForm'

interface AuthContextData {
  customer: Customer
  isAuthenticated: boolean
  handleLogin: (login: LoginForm) => Promise<void>
  handleRegister: (register: RegisterForm) => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [customer, setCustomer] = useState({} as Customer)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = async (login: LoginForm) => {
    const { data: { jwt, customer } } = await customers.post('/customers/token', login)
    setCustomer(customer)
    handleAuth(jwt)
  }
  
  const handleRegister = async (register: RegisterForm) => {
    await customers.post('/customers', register)
    await handleLogin({ email: register.email, password: register.password })
  }

  const handleAuth = (jwt: string) => {
    if (localStorage.getItem('token'))
      localStorage.removeItem('token')

    localStorage.setItem('token', jwt)
    setIsAuthenticated(true)
  }

  return (
    <AuthContext.Provider
      value={{
        customer,
        isAuthenticated,
        handleLogin,
        handleRegister
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}