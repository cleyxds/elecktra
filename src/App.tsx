import React from 'react';

import { SideBar } from './components/SideBar';
import { Profile } from './components/Profile';
import { Dashboard } from './components/Dashboard';

import { PricingTable } from './components/PricingTable';

import styles from './app.module.sass';

import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <div className={styles.container}>
      <GlobalStyles />
      <SideBar />
      <main>
        <Profile />
        <Dashboard />
      </main>
    </div>
  )
}

export default App;
