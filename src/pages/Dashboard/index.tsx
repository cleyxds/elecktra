import React from 'react'

import { SideBar } from '../../components/SideBar'
import { Profile } from '../../components/Profile'
import { Measurement } from '../../components/Measurement'
import { Streaming } from '../../components/Streaming'

import styles from './dashboard.module.sass'

export const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <SideBar />

      <main className={styles.dashboard}>
        <Profile />
        <div className={styles.content}>
          <h1>Dashboard</h1>
          <div className={styles.measurements}>
            <Measurement />
            <Streaming />
          </div>
        </div>
      </main>
    </div>
  )
}
