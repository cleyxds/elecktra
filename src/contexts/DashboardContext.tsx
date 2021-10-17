import React, { createContext, ReactNode, useState } from 'react'

import { SettingsModal } from '../components/SettingsModal'

interface DashboardContextData {
  toggleSettingsModal: () => void
  toggleUploadModal: () => void
  isUploadModalOpen: boolean
  closeModals: () => void
  lastMeasurement: number
  setLastMeasurement: (measurement: IMeasurement) => void
}

export interface IMeasurement {
  device_id: string
  customer_id: number
  measurement: number
  timestamp: string
}

interface DashboardContextProviderProps {
  children: ReactNode
}

export const DashboardContext = createContext({} as DashboardContextData)

export const DashboardContextProvider = ({ children }: DashboardContextProviderProps) => {
  const [measurement, setMeasurement] = useState({ measurement: 0 } as IMeasurement)
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false)
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)

  const lastMeasurement: number = measurement.measurement

  const closeModals = () => {
    setIsSettingsModalOpen(false)
    setIsUploadModalOpen(false)
    setMeasurement({} as IMeasurement)
  }

  const toggleUploadModal = () => {
    setIsUploadModalOpen(!isUploadModalOpen)
  }

  const toggleSettingsModal = () => {
    setIsSettingsModalOpen(!isSettingsModalOpen)
  }

  const setLastMeasurement = (measurement: IMeasurement) => setMeasurement(measurement)

  return (
    <DashboardContext.Provider
      value={{
        toggleSettingsModal,
        toggleUploadModal,
        isUploadModalOpen,
        closeModals,
        lastMeasurement,
        setLastMeasurement
      }}
    >
      {children}

      { isSettingsModalOpen && <SettingsModal /> }
    </DashboardContext.Provider>
  )
}