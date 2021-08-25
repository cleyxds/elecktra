import React, { useContext } from 'react'

import { AuthContext } from '../../contexts/AuthContext'

import { Link, useHistory } from 'react-router-dom'

import { useForm } from 'react-hook-form'

import { Header } from '../../components/Header'

import { IRegisterForm } from '../../types/context'

import styles from './signup.module.sass'

export const Signup = () => {
  const { register, handleSubmit } = useForm<IRegisterForm>()

  const { handleRegister } = useContext(AuthContext)

  const history = useHistory()

  const confirmRegister = async (register: IRegisterForm) => {
    await handleRegister(register)
    setTimeout(() => {
      history.push('dashboard')
    }, 500)
  }

  return (
    <>
      <Header />
      <div className={styles.signUpContainer}>
        <h1>Bem vindo(a)!</h1>

        <section className={styles.formContainer}>
          <form onSubmit={handleSubmit(confirmRegister)}>
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

        <span className={styles.alternative}>Já tem uma conta? <Link to='/login'>Entre agora</Link></span>
      </div>
    </>
  )
}
