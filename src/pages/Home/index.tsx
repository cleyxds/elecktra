import React from 'react';

import { Link } from 'react-router-dom';

import styles from './styles.module.sass';

export const Home = () => {

  return (
    <div>
      <div>Homepage</div>
      <Link to="/login">
        <button>Vá para o LOGIN</button>
      </Link>
      <Link to="/signup">
        <button>Vá se registar</button>
      </Link>
    </div>
  )
}
