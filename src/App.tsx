import React from 'react'

import { GlobalStyles } from './styles/GlobalStyles'
import { Router } from './routes'
import { DashboardContext } from './contexts/DashboardContext'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <>
      <AuthProvider>
        <GlobalStyles />
        <DashboardContext.Provider value={0}>
          <Router />
        </DashboardContext.Provider>
      </AuthProvider>
    </>
  )
}

export default App
