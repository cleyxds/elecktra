import React from 'react';

import { SideBar } from './components/SideBar';
import { Profile } from './components/Profile';
import { Dashboard } from './pages/Dashboard';

import styles from './app.module.sass';

import { GlobalStyles } from './styles/GlobalStyles';

import { Router } from './routes';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
    // <div className={styles.container}>
    //   <GlobalStyles />
    //   <SideBar />
    //   <main>
    //     <Profile />
    //     <Dashboard />
    //   </main>
    // </div>
  )
}

export default App;
