import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useHistory } from 'react-router-dom';
import { Header } from '../../components/Header';

import { customers } from '../../services/api';

import styles from './styles.module.sass';

export const Login = () => {

  const history = useHistory();

  const handleFormLogin = () => {
    history.push('/dashboard');
  }

  return (
    <>
      <Header />
      <div className={styles.loginContainer}>
        <h1>Bem vindo(a) de volta!</h1>

        <section className={styles.formContainer}>
          <form>
            <input type="text" placeholder="Nome de usuário" />
            <input type="password" placeholder="Senha" />

            <button type="submit" onClick={handleFormLogin}>Login</button>
          </form>
        </section>

        <div className={styles.alternative}>
          <span>Não tem uma conta? <Link to="/signup">Crie uma</Link></span>
        </div>
      </div>
    </>
  )
}
