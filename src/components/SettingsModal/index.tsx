import React, { useContext } from 'react'

import { AuthContext } from '../../contexts/AuthContext'
import { DashboardContext } from '../../contexts/DashboardContext'

import CloseIcon from '../../assets/Dashboard/close.svg'

import styles from './settings.module.sass'

export const SettingsModal = () => {
  const { customer } = useContext(AuthContext)
  const { toggleSettingsModal } = useContext(DashboardContext)

  return (
    <div className={styles.overlay}>
      <section className={styles.settingsContainer}>
        <h2>Settings</h2>

        <div>
          <span>Your ID: {customer.id}</span>
          <span>Username: {customer.login}</span>
          <span>Devices: {customer.devices}</span>
          <span>@ {customer.created_at}</span>
        </div>

        <button type='button' onClick={toggleSettingsModal}>
          <img src={CloseIcon} alt='Fechar' />
        </button>
      </section>
    </div>
  )
}
