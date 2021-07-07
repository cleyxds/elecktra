import React, { useEffect, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { Header } from '../../components/Header';

import { customers } from '../../services/api';

import styles from './signup.module.sass';

export const Signup = () => {

  const history = useHistory();

  const handleFormRegister = () => {
    history.push('/dashboard');
  }

  return (
    <>
      <Header />
      <div className={styles.signUpContainer}>
        <h1>Bem vindo(a)!</h1>

        <section className={styles.formContainer}>
          <form>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Nome de usuário" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />

            <button type="submit" onClick={handleFormRegister}>Criar agora</button>
          </form>
        </section>

        <div className={styles.alternative}>
          <span>Já tem uma conta? <Link to="/login">Entre agora</Link></span>
        </div>
      </div>
    </>
  )
}
