import React, { createContext, ReactNode, useState } from 'react'

import { io, Socket } from 'socket.io-client'

import { SettingsModal } from '../components/SettingsModal'

interface DashboardContextData {
  toggleSettingsModal: () => void
  toggleUploadModal: () => void
  isUploadModalOpen: boolean
  closeModals: () => void
  startSocket: () => Socket
  getSocket: () => Socket
  closeSocket: () => void
  currentMeasurement: () => number
  setCurrentMeasurement: (measurement: IMeasurement) => void
}

export interface IMeasurement {
  customer: number
  measurement: number
  timestamp: string
}

interface DashboardContextProviderProps {
  children: ReactNode
}

const SOCKET_IO_CONNECTION: string = process.env.REACT_APP_SOCKETIO_SERVER as string

let socket: Socket

export const DashboardContext = createContext({} as DashboardContextData)

export const DashboardContextProvider = ({ children }: DashboardContextProviderProps) => {
  const [measurement, setMeasurement] = useState({ measurement: 0 } as IMeasurement)
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false)
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)

  const closeModals = () => {
    setIsSettingsModalOpen(false)
    setIsUploadModalOpen(false)
  }

  const toggleUploadModal = () => {
    setIsUploadModalOpen(!isUploadModalOpen)
  }

  const toggleSettingsModal = () => {
    setIsSettingsModalOpen(!isSettingsModalOpen)
  }

  const startSocket = () => {
    return socket = io(SOCKET_IO_CONNECTION)
  }

  const getSocket = () => {
    return socket
  }

  const closeSocket = () => {
    socket.close()
  }

  const currentMeasurement = () => measurement.measurement

  const setCurrentMeasurement = (measurement: IMeasurement) => setMeasurement(measurement)

  return (
    <DashboardContext.Provider
      value={{
        toggleSettingsModal,
        toggleUploadModal,
        isUploadModalOpen,
        closeModals,
        startSocket,
        getSocket,
        closeSocket,
        currentMeasurement,
        setCurrentMeasurement
      }}
    >
      {children}

      { isSettingsModalOpen && <SettingsModal /> }
    </DashboardContext.Provider>
  )
}