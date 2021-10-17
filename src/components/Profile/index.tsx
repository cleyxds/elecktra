import React, { useContext } from 'react'

import { AuthContext } from '../../contexts/AuthContext'
import { DashboardContext } from '../../contexts/DashboardContext'

import { UploadModal } from '../UploadModal'

import UserIcon from '../../assets/Dashboard/user.svg'

import { useHistory } from 'react-router-dom'

import styles from './profile.module.sass'

export const Profile = () => {
  const { customer, handleLogout } = useContext(AuthContext)
  const { toggleUploadModal, isUploadModalOpen, closeModals } = useContext(DashboardContext)

  const history = useHistory()

  const confirmLogout = () => {
    closeModals()
    handleLogout()
    setTimeout(() => history.push('/'), 1000)
  }

  return (
    <div className={styles.profileContainer}>
      {customer.avatar_url ?
        <img 
          src={customer.avatar_url} 
          alt='Customer' 
          onClick={toggleUploadModal} 
        />
        :
        <img 
          src={UserIcon} 
          alt='Customer' 
          onClick={toggleUploadModal} 
        />
      }
      <h4>{customer.name}</h4>
      <button className={styles.logout} onClick={confirmLogout}>Logout</button>
      {isUploadModalOpen && <UploadModal />}
    </div>
  )
}
