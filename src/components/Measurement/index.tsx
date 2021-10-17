import React, { useContext, useEffect } from 'react'

import { AuthContext } from '../../contexts/AuthContext'
import { DashboardContext, IMeasurement } from '../../contexts/DashboardContext'

import BatteriesIcon from '../../assets/Dashboard/battery.svg'
import EnergyIcon from '../../assets/Dashboard/energy.svg'
import GlobeIcon from '../../assets/Dashboard/globe.svg'

import { io, Socket } from 'socket.io-client'

import styles from './measurement.module.sass'

const SOCKET_IO_CONNECTION: string = process.env.REACT_APP_SOCKETIO_SERVER as string

export const Measurement = () => {
  const { customer } = useContext(AuthContext)
  const { lastMeasurement, setLastMeasurement } = useContext(DashboardContext)

  let socket: Socket

  useEffect(() => {
    socket = io(SOCKET_IO_CONNECTION)
    socket.emit('customer', customer)
  }, [])

  useEffect(() => {
    socket.emit('customer', customer)
  }, [])

  useEffect(() => {
    socket.on('measurement', (data: IMeasurement) => {
      data.customer_id === customer.id &&
      setLastMeasurement(data)
    })
  }, [])

  return (
    <section className={styles.performanceContainer}>
      <h2>Performance</h2>
      <div className={styles.live}>
        <div
          className={styles.sun}
          style={{ transform: `scale(${(lastMeasurement / 5500) * 2})` }}
        />

        <div className={styles.statistics}>
          <h4>Consumo instanâneo</h4>

          <strong>{lastMeasurement} <sup>W</sup></strong>

          <p>Aumento de +12%</p>
        </div>
      </div>
      <div className={styles.metrics}>
        <div className={styles.pipe}>
          <img src={BatteriesIcon} alt='Batteries Icon' />
          <div>
            <span className={styles.label}>Voltagem</span>
            <span><strong>220</strong> <small> V</small></span>
          </div>
        </div>
        <div className={styles.pipe}>
          <img src={EnergyIcon} alt='Energy Icon' />
          <div>
            <span className={styles.label}>Amperagem Máxima</span>
            <span><strong>30</strong> <small> A</small></span>
          </div>
        </div>
        <div>
          <img src={GlobeIcon} alt='Globe Icon' />
          <div>
            <span className={styles.label}>Redução de CO2</span>
            <span><strong>0</strong> <small> kg</small></span>
          </div>
        </div>
      </div>
    </section>
  )
}
