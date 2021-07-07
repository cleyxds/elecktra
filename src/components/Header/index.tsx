import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.module.sass';

import Logo from '../../assets/logo.svg';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
    </header>
  )
}
