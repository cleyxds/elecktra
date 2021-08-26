import React, { useContext, useEffect, useState } from 'react'

import { Socket } from 'socket.io-client'

import { AuthContext } from '../../contexts/AuthContext'
import { DashboardContext, IMeasurement } from '../../contexts/DashboardContext'

import BatteriesIcon from '../../assets/Dashboard/battery.svg'
import EnergyIcon from '../../assets/Dashboard/energy.svg'
import GlobeIcon from '../../assets/Dashboard/globe.svg'

import styles from './measurement.module.sass'

export const Measurement = () => {
  const { customer } = useContext(AuthContext)
  const { 
    SETUP_SOCKET,
    useSocket,
    currentMeasurement,
    setCurrentMeasurement
  } = useContext(DashboardContext)

  let socket = useSocket()

  useEffect(() => {
    socket = SETUP_SOCKET()
    socket.emit('customer', customer)
  }, [])

  useEffect(() => {
    socket.on('measurement', message => {
      const measurementMessage = message as IMeasurement

      measurementMessage.customer === customer.id && setCurrentMeasurement(measurementMessage)
    })
  }, [])

  return (
    <section className={styles.performanceContainer}>
      <h2>Performance</h2>
      <div className={styles.live}>
        <div 
          className={styles.sun} 
          style={{ transform: `scale(${(currentMeasurement() / 5500) * 2})` }} 
        />

        <div className={styles.statistics}>
          <h4>Consumo instanâneo</h4>

          <strong>{currentMeasurement()} <sup>W</sup></strong>

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
