import React, { useContext } from 'react'

import Logo from '../../assets/logo.svg'
import DashboardIcon from '../../assets/Sidebar/dashboard.svg'
import BatteryIcon from '../../assets/Sidebar/battery.svg'
import SettingsIcon from '../../assets/Sidebar/settings.svg'

import { DashboardContext } from '../../contexts/DashboardContext'

import styles from './sidebar.module.sass'

export const SideBar = () => {
  const { toggleSettingsModal } = useContext(DashboardContext);

  return (
    <aside>
      <img src={Logo} alt='Logo' />

      <nav>
        {/* <div className={styles.option}>
          <img src={DashboardIcon} alt='Dashboard Icon' />
          <h2>Dashboard</h2>
        </div> */}
        <div className={styles.option}>
          <img src={BatteryIcon} alt='Battery Icon' />
          <h2>Baterias</h2>
        </div>
        <div className={styles.option} onClick={toggleSettingsModal}>
          <img src={SettingsIcon} alt='Settings Icon' />
          <h2>Configurações</h2>
        </div>
      </nav>
    </aside>
  )
}
