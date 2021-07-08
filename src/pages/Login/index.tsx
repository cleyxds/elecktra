import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { Header } from '../../components/Header';
import { customers } from '../../services/api';

import styles from './login.module.sass';

interface LoginForm {
  username: string;
  password: string;
}

export const Login = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm<LoginForm>();

  const handleLogin = async (data: LoginForm) => {
    await customers.post('/authenticate', data)
      .then(response => {
        if (response.status === 200) {
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
      <div className={styles.loginContainer}>
        <h1>Bem vindo(a) de volta!</h1>

        <section className={styles.formContainer}>
          <form onSubmit={handleSubmit(handleLogin)}>
            <input
              {...register("username")}
              type="text"
              placeholder="Nome de usuário"
              name="username"
            />
            <input
              {...register("password")}
              type="password"
              placeholder="Senha"
              name="password"
            />

            <button type="submit">Entrar</button>
          </form>
        </section>

        <div className={styles.alternative}>
          <span>Não tem uma conta? <Link to="/signup">Crie uma</Link></span>
        </div>
      </div>
    </>
  )
}
