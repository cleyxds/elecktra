import React, { useContext, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { AuthContext } from '../../contexts/AuthContext'

import styles from './home.module.sass'

export const Home = () => {
  const { prepareJWT } = useContext(AuthContext)

  useEffect(() => {
    const JWT = localStorage.getItem('token')
    JWT && prepareJWT(JWT)
  })

  return (
    <>
      <Header isHome />
      <div className={styles.homeContainer}>
        <h1>Homepage</h1>
      </div>
    </>
  )
}
