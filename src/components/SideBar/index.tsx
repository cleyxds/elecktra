import React from 'react';

import Logo from '../../assets/Sidebar/logo.svg';
import DashboardIcon from '../../assets/Sidebar/dashboard.svg'
import BatteryIcon from '../../assets/Sidebar/battery.svg'
import SettingsIcon from '../../assets/Sidebar/settings.svg'

import styles from './styles.module.sass';

export const SideBar = () => {
  return (
    <aside>
      <img src={Logo} alt="Logo" />

      <nav className={styles.featureContainer}>
        <div className={styles.feature}>
          <img src={DashboardIcon} alt="Dashboard Icon" />
          <h2>Dashboard</h2>
        </div>
        <div className={styles.feature}>
          <img src={BatteryIcon} alt="Battery Icon" />
          <h2>Batteries</h2>
        </div>
        <div className={styles.feature}>
          <img src={SettingsIcon} alt="Settings Icon" />
          <h2>Settings</h2>
        </div>
      </nav>
    </aside>
  )
}
