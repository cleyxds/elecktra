import React, { useContext } from 'react'

import { Link, useHistory } from 'react-router-dom'

import styles from './header.module.sass'

import Logo from '../../assets/logo.svg'

import { AuthContext } from '../../contexts/AuthContext'

export const Header = ({ isHome }: any) => {
  const { validateAuth } = useContext(AuthContext)

  const history = useHistory()

  const handleLogin = async () => {
    await validateAuth() && setTimeout(() => history.push('dashboard'), 500)
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
        <nav className={styles.auth}>
          <Link to='/login' className={`${styles.buttons} ${styles.login}`} onClick={handleLogin}>
            Login
          </Link>
          <Link to='/signup' className={`${styles.buttons} ${styles.register}`}>
            Register
          </Link>
        </nav>
        ) 
      }
    </header>
  )
}
