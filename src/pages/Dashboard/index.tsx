import React, { useContext } from 'react'

import { SideBar } from '../../components/SideBar'
import { Profile } from '../../components/Profile'
import { Measurement } from '../../components/Measurement'
import { Streaming } from '../../components/Streaming'
import { Devices } from '../../components/Devices/Devices'

import { AuthContext } from '../../contexts/AuthContext'

import styles from './dashboard.module.sass'

export const Dashboard = () => {
  const { customer } = useContext(AuthContext)

  return (
    <div className={styles.dashboardContainer}>
      <SideBar />

      <main className={styles.dashboard}>
        <Profile />
        <div className={styles.content}>
          <h1>Dashboard</h1>
          
          { customer.devices.length === 0 ? 
            <div className={styles.deviceForm}>
              <Devices />
            </div>
            :
            <div className={styles.measurements}>
              <Measurement />
              <Streaming />
            </div>
          }

        </div>
      </main>
    </div>
  )
}
