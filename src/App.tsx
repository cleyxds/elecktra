import React from 'react'

import { GlobalStyles } from './styles/GlobalStyles'
import { Router } from './routes'
import { DashboardContextProvider } from './contexts/DashboardContext'
import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  return (
    <>
      <GlobalStyles />
      <AuthContextProvider>
        <DashboardContextProvider>
          <Router />
        </DashboardContextProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
