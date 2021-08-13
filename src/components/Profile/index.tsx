import React, { useContext } from 'react'

import { AuthContext } from '../../contexts/AuthContext'
import { DashboardContext } from '../../contexts/DashboardContext'

import UserIcon from '../../assets/Dashboard/user.svg'

import { useHistory } from 'react-router-dom'

import styles from './profile.module.sass'

export const Profile = () => {
  const { customer, handleLogout } = useContext(AuthContext)

  const { closeSocket } = useContext(DashboardContext)

  const history = useHistory()

  const confirmLogout = () => {
    handleLogout()
    closeSocket()
    setTimeout(() => history.push('/'), 1000)
  }

  return (
    <div className={styles.profileContainer}>
      {customer.avatar_url ?
        <img src={customer.avatar_url} alt='Customer' />
        :
        <img src={UserIcon} alt='Customer' />
      }
      <h4>{customer.name}</h4>
      <button className={styles.logout} onClick={confirmLogout}>Logout</button>
    </div>
  )
}
