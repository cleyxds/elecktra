import React, { useContext, useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'

import BatteriesIcon from '../../assets/Dashboard/battery.svg'
import EnergyIcon from '../../assets/Dashboard/energy.svg'
import GlobeIcon from '../../assets/Dashboard/globe.svg'
import { Profile } from '../../components/Profile'
import { SideBar } from '../../components/SideBar'
import { AuthContext } from '../../contexts/AuthContext'

import { DashboardContext } from '../../contexts/DashboardContext'

import styles from './dashboard.module.sass'

let socket: Socket

const SOCKET_IO_CONNECTION: string = process.env.REACT_APP_SOCKETIO_SERVER as string

interface Measurement {
  customer: number
  measurement: number
  timestamp: string
}

export const Dashboard = () => {
  const [measurement, setMeasurement] = useState({ measurement: 0 } as Measurement)
  
  const { customer } = useContext(AuthContext)

  useEffect(() => {
    socket = io(SOCKET_IO_CONNECTION)
    socket.emit('customer', customer)
  }, [])

  useEffect(() => {
    socket.on('measurement', message => {
      const measurementMessage = message as Measurement

      if (measurementMessage.customer === customer.id) {
        setMeasurement(measurementMessage)
      }
      
    })
  }, [])

  return (
    <div className={styles.dashboardContainer}>
      <SideBar />

      <div className={styles.dashboard}>
        <Profile />
        <section className={styles.measurementsContainer}>
          <h1>Dashboard</h1>
          <div>
            <section className={styles.performance}>
              <h2>Performance</h2>
              <div className={styles.measurements}>
                <div className={styles.graphics} style={{ transform: `scale(${(measurement.measurement / 5500) * 2})` }} />
                <div className={styles.statistics}>
                  <h4>Consumo instanâneo</h4>

                  <strong>{measurement.measurement} <sup>W</sup></strong>

                  <p>Aumento de +12%</p>
                </div>
                <select autoFocus name='options' defaultValue='Instant' className={styles.selector}>
                  <option value='Instant'>Instanâneo</option>
                </select>
              </div>
              <div className={styles.metrics}>
                <div className={styles.smallFeature}>
                  <img src={BatteriesIcon} />
                  <div>
                    <span className={styles.feature}>Capacidade</span>
                    <span><strong>45</strong> <small> Ah</small></span>
                  </div>
                </div>
                <div className={styles.smallFeature}>
                  <img src={EnergyIcon} />
                  <div>
                    <span className={styles.feature}>Rendimento total</span>
                    <span><strong>0.13</strong> <small> kWh</small></span>
                  </div>
                </div>
                <div>
                  <img src={GlobeIcon} />
                  <div>
                    <span className={styles.feature}>Redução de CO2</span>
                    <span><strong>0.1</strong> <small> ton</small></span>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.average}>
              <h2>Média</h2>
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}
