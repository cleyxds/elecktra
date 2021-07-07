import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import DashboardIcon from '../../assets/Sidebar/dashboard.svg'
import BatteryIcon from '../../assets/Sidebar/battery.svg'
import SettingsIcon from '../../assets/Sidebar/settings.svg'

import styles from './sidebar.module.sass';

export const SideBar = () => {
  return (
    <aside>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>

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
