import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import { customers } from '../../services/api';

import styles from './styles.module.sass';

export const Login = () => {

  const history = useHistory();

  const handleFormLogin = () => {
    
    history.push('/dashboard');
  }

  return (
    <form>
      <input type="text" placeholder="Seu nome de usuário" />
      <input type="text" placeholder="Sua senha" />

      <button type="submit" onClick={handleFormLogin}>Login</button>
    </form>
  )
}
