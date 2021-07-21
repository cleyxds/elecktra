import React, { useContext } from 'react'

import { AuthContext } from '../../contexts/AuthContext'

import { Link, useHistory } from 'react-router-dom'

import { useForm } from 'react-hook-form'

import { Header } from '../../components/Header'

import { LoginForm } from '../../types/loginForm'

import styles from './login.module.sass'

export const Login = () => {
  const { register, handleSubmit } = useForm<LoginForm>()

  const { handleLogin } = useContext(AuthContext)
  
  const history = useHistory()

  const confirmLogin = async (loginForm: LoginForm) => {
    await handleLogin(loginForm)
    setTimeout(() => {
      history.push('dashboard')
    }, 500)
    
  }

  return (
    <>
      <Header />
      <div className={styles.loginContainer}>
        <h1>Bem vindo(a) de volta!</h1>

        <section className={styles.formContainer}>
          <form onSubmit={handleSubmit(confirmLogin)}>
            <input
              {...register('email')}
              type='email'
              placeholder='Email'
              name='email'
            />
            <input
              {...register('password')}
              type='password'
              placeholder='Senha'
              name='password'
            />

            <button type='submit'>Entrar</button>
          </form>
        </section>

        <div className={styles.alternative}>
          <span>Não tem uma conta? <Link to='/signup'>Crie uma</Link></span>
        </div>
      </div>
    </>
  )
}
