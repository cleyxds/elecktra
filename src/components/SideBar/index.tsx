import React from 'react';

import Logo from '../../assets/main-logo.svg';
import BatteryIcon from '../../assets/Dashboard/battery.svg'

import styles from './styles.module.sass';

export const SideBar = () => {
  return (
    <aside>
      <img src={Logo} alt="Logo" />

      <nav className={styles.featureContainer}>
        <div className={styles.feature}>
          <h2>Dashboard</h2>
        </div>
        <div className={styles.feature}>
          <h2>Analitycs</h2>
        </div>
        <div className={styles.feature}>
          <h2>Lightning</h2>
        </div>
        <div className={styles.feature}>
          <img src={BatteryIcon} alt="Batteries Icon" />
          <h2>Batteries</h2>
        </div>
        <div className={styles.feature}>
          <h2>Settings</h2>
        </div>
      </nav>
    </aside>
  )
}
