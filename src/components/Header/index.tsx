import React, { useContext } from 'react'

import { Link, useHistory } from 'react-router-dom'

import styles from './header.module.sass'

import Logo from '../../assets/logo.svg'

import { AuthContext } from '../../contexts/AuthContext'

export const Header = ({ isHome }: any) => {
  const { validateAuth } = useContext(AuthContext)

  const history = useHistory()

  const handleLogin = () => {
    validateAuth() && setTimeout(() => history.push('dashboard'), 500)
  }

  return (
    <header className={styles.headerContainer}>
      { isHome ? 
        <img src={Logo} alt='Logo' />
       : 
        <Link to='/'>
          <img src={Logo} alt='Logo' />
        </Link>
      }

      { isHome && (
        <nav className={styles.authContainer}>
          <Link to='/login' className={`${styles.authButton} ${styles.login}`} onClick={handleLogin}>
            Login
          </Link>
          <Link to='/signup' className={`${styles.authButton} ${styles.register}`}>
            Register
          </Link>
        </nav>
        ) 
      }
    </header>
  )
}
