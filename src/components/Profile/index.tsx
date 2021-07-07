import React, { useEffect, useState } from 'react';

import UserIcon from '../../assets/Dashboard/user.svg';

import { customers } from '../../services/api';

import styles from './profile.module.sass';

export const Profile = () => {

  return (
    <div className={styles.profileContainer}>
      <img src={UserIcon} alt="User" />
      <h4>{'username'}</h4>
    </div>
  )
}
