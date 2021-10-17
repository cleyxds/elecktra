import React, { useContext } from 'react'

import { AuthContext } from '../../contexts/AuthContext'
import { DashboardContext } from '../../contexts/DashboardContext'

import CloseIcon from '../../assets/Dashboard/close.svg'

import { format, parseISO } from 'date-fns'

import styles from './settings.module.sass'

export const SettingsModal = () => {
  const { customer } = useContext(AuthContext)
  const { toggleSettingsModal } = useContext(DashboardContext)

  const formattedDate = format(parseISO(customer.created_at), 'dd/MM/yyyy @ h:mm aa')

  return (
    <div className={styles.overlay}>
      <section className={styles.settingsContainer}>
        <h2>Configurações</h2>

        <div>
          <span>Usuário: {customer.login}</span>
          <span>ID: {customer.id}</span>
          <span>Dispositivos: {customer.devices.length}</span>
          <span>Criado em {formattedDate}</span>
        </div>

        <button type='button' onClick={toggleSettingsModal}>
          <img src={CloseIcon} alt='Fechar' />
        </button>
      </section>
    </div>
  )
}
