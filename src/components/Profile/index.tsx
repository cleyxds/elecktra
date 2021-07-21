import React, { useContext } from 'react'

import UserIcon from '../../assets/Dashboard/user.svg'
import { AuthContext } from '../../contexts/AuthContext'

import styles from './profile.module.sass'

export const Profile = () => {
  const { customer } = useContext(AuthContext)

  return (
    <div className={styles.profileContainer}>
      {customer.avatar_url ?
        <img src={customer.avatar_url} />
        :
        <img src={UserIcon} />
      }
      <h4>{customer.name}</h4>
    </div>
  )
}
