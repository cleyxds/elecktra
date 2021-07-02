import React, { useEffect, useState } from 'react';

import { api } from '../../services/api';

import styles from './styles.module.sass';

export const Profile = () => {
  const [user, setUser] = useState({id: 0, name: ''});
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    // GET CUSTOMER DATA
    api.get('/customers/2')
      .then(response => {
        const { id, name } = response.data;
        setUser({ id, name })
      })

    api.get('/images/2')
      .then(response => {
        const avatar_url = response.data;
        setPhoto(avatar_url);
      })
    
  }, [])

  return (
    <header className={styles.profileContainer}>
      <img src={photo} alt="User" />
      <h4>{user.name}</h4>
    </header>
  )
}
