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
        <h2>Configurações</h2>

        <div>
          <span>Usuário: {customer.login}</span>
          <span>ID: {customer.id}</span>
          <span>Dispositivos: {customer.devices}</span>
          <span>Criado em {customer.created_at}</span>
        </div>

        <button type='button' onClick={toggleSettingsModal}>
          <img src={CloseIcon} alt='Fechar' />
        </button>
      </section>
    </div>
  )
}
