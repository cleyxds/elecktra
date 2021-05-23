import React from 'react';

import Logo from '../../assets/arrow.png';

import styles from './styles.module.sass';

export const SideBar = () => {
  return (
    <aside>
      <img src={Logo} alt="Logo" />

      <nav className={styles.featureContainer}>
        <div className={styles.feature}>
          <span>Dashboard</span>
        </div>
        <div className={styles.feature}>
          <span>Analitycs</span>
        </div>
        <div className={styles.feature}>
          <span>Lightning</span>
        </div>
        <div className={styles.feature}>
          <span>Batteries</span>
        </div>
        <div className={styles.feature}>
          <span>Settings</span>
        </div>
      </nav>
    </aside>
  )
}
