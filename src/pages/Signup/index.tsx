import React from 'react'

import { Link, useHistory } from 'react-router-dom'

import { useForm } from 'react-hook-form'

import { Header } from '../../components/Header'
import { customers } from '../../services/api'

import styles from './signup.module.sass'

interface RegisterForm {
  name: string
  username: string
  email: string
  password: string
}

export const Signup = () => {
  const history = useHistory()
  const { register, handleSubmit } = useForm<RegisterForm>()

  const handleRegister = async (data: RegisterForm) => {
    await customers.post('/customers', data)
      .then(response => {
        if (response.status === 201) {
          history.push('dashboard')
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <Header />
      <div className={styles.signUpContainer}>
        <h1>Bem vindo(a)!</h1>

        <section className={styles.formContainer}>
          <form onSubmit={handleSubmit(handleRegister)}>
            <input
              {...register('name')}
              type='text'
              placeholder='Nome'
              name='name'
            />
            <input
              {...register('username')}
              type='text'
              placeholder='Nome de usuário'
              name='username'
            />
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

            <button type='submit'>Criar agora</button>
          </form>
        </section>

        <div className={styles.alternative}>
          <span>Já tem uma conta? <Link to='/login'>Entre agora</Link></span>
        </div>
      </div>
    </>
  )
}
