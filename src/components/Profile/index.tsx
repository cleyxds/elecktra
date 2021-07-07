import React, { useEffect, useState } from 'react';

import { customers } from '../../services/api';

import styles from './profile.module.sass';

export const Profile = () => {

  return (
    <div className={styles.profileContainer}>
      <img src={'photo'} alt="User" />
      <h4>{process.env.REACT_APP_CUSTOMERS_SERVER}</h4>
    </div>
  )
}
