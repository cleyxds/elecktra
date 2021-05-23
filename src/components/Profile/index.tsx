import React from 'react';

import Logo from '../../assets/CONFUSION.png';

import styles from './styles.module.sass';

export const Profile = () => {
  return (
    <header className={styles.profileContainer}>
      <img src={Logo} alt="Profile Picture" />
      <h4>Cleyson Barbosa</h4>
    </header>
  )
}
