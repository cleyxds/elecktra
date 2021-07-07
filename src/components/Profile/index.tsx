import React, { useEffect, useState } from 'react';

import { customers } from '../../services/api';

import styles from './styles.module.sass';

export const Profile = () => {

  return (
    <header className={styles.profileContainer}>
      <img src={'photo'} alt="User" />
      <h4>{process.env.REACT_APP_CUSTOMERS_SERVER}</h4>
    </header>
  )
}
