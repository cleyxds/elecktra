import React from 'react'
import { Link } from 'react-router-dom'

import styles from './header.module.sass'

import Logo from '../../assets/logo.svg'

export const Header = ({ isHome }: any) => {
  return (
    <header className={styles.headerContainer}>
      { isHome ? (
        <img src={Logo} alt='Logo' />
      ) : (
        <Link to='/'>
          <img src={Logo} alt='Logo' />
        </Link>
      )}

      { isHome ? (
        <nav className={styles.authContainer}>
          <Link to='/login' className={`${styles.authButton} ${styles.login}`}>
            Login
          </Link>
          <Link to='/signup' className={`${styles.authButton} ${styles.register}`}>
            Register
          </Link>
        </nav>
      ) : (
        <></>
        ) 
      }
    </header>
  )
}
