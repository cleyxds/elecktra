import React from 'react'

import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'

import styles from './home.module.sass'

export const Home = () => {

  return (
    <>
      <Header isHome />
      <div className={styles.homeContainer}>
        <h1>Homepage</h1>
      </div>
    </>
  )
}
