import React, { createContext, ReactNode, useState } from 'react'

import { io, Socket } from 'socket.io-client'

import { SettingsModal } from '../components/SettingsModal'

interface DashboardContextData {
  toggleSettingsModal: () => void
  socketSetup: () => Socket
  closeSocket: () => void
}

interface DashboardContextProviderProps {
  children: ReactNode
}

const SOCKET_IO_CONNECTION: string = process.env.REACT_APP_SOCKETIO_SERVER as string

let socket: Socket

export const DashboardContext = createContext({} as DashboardContextData)

export const DashboardContextProvider = ({ children }: DashboardContextProviderProps) => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false)

  const toggleSettingsModal = () => {
    setIsSettingsModalOpen(!isSettingsModalOpen)
  }

  const socketSetup = () => {
    return socket = io(SOCKET_IO_CONNECTION)
  }

  const closeSocket = () => {
    socket.close()
  }

  return (
    <DashboardContext.Provider
      value={{
        toggleSettingsModal,
        socketSetup,
        closeSocket
      }}
    >
      {children}

      { isSettingsModalOpen && <SettingsModal /> }
    </DashboardContext.Provider>
  )
}