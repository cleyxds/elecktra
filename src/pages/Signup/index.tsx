import React, { useEffect, useState } from 'react';

import { customers } from '../../services/api';

import styles from './styles.module.sass';

export const Login = () => {

  return (
    <form>
      <input type="text" placeholder="Seu nome" />
      <input type="text" placeholder="Seu nome" />
      <input type="text" placeholder="Seu nome" />
      <input type="text" placeholder="Seu nome" />

      <button type="submit" onSubmit={() => console.log('Call login')}>Create</button>
    </form>
  )
}
