import React, { useEffect, useState } from 'react'

import UserIcon from '../../assets/Dashboard/user.svg'

import { customers } from '../../services/api'

import styles from './profile.module.sass'

interface Customer {
  id: number
  name: string
  login: string
  devices: number
  avatar_url: string
  created_at: string
}

export const Profile = () => {
  const [customer, setCustomer ] = useState<Customer>()

  return (
    <div className={styles.profileContainer}>
      <img src={UserIcon} />
      <h4>{customer?.name}</h4>
    </div>
  )
}
