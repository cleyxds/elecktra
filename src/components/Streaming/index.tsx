import React, { useContext, useEffect } from 'react'

import { Line } from 'react-chartjs-2'

import { Chart, ChartData, ChartOptions } from 'chart.js'

import { StreamingPlugin, RealTimeScale } from 'chartjs-plugin-streaming'
import 'chartjs-adapter-date-fns'

import { io, Socket } from 'socket.io-client'

import { AuthContext } from '../../contexts/AuthContext'
import { IMeasurement } from '../../contexts/DashboardContext'

import styles from './streaming.module.sass'

const SOCKET_IO_CONNECTION: string = process.env.REACT_APP_SOCKETIO_SERVER as string

export const Streaming = () => {
  const { customer } = useContext(AuthContext)

  let socket: Socket

  Chart.register(StreamingPlugin)
  Chart.registry.addScales(RealTimeScale)

  useEffect(() => {
    socket = io(SOCKET_IO_CONNECTION)
    socket.emit('customer', customer)
  }, [])

  const updateChart = (chart: Chart) => {
    socket.on('measurement', (data: IMeasurement) => {

      data.customer_id === customer.id &&
        chart.data.datasets[0].data.push({
          x: Date.now(),
          y: data.measurement
        })

      chart.update('quiet')
    })
  }

  useEffect(() => {
    const chart = Chart.instances[0]
    updateChart(chart)
  }, [])

  const data: ChartData = {
    datasets: [{
      label: 'Watts',
      data: [],
      backgroundColor: '#E2521E',
      borderColor: '#DF9D62',
      borderWidth: 1.5
    }]
  }

  const options: ChartOptions = {
    interaction: {
      intersect: false
    },
    scales: {
      x: {
        type: 'realtime'
      },
      y: {
        beginAtZero: true
      }
    }
  }

  return (
    <section className={styles.streamingContainer}>
      <h2>Média</h2>
      <div className={styles.live}>
        <Line
          width={400}
          height={250}
          data={data}
          options={options}
          plugins={[StreamingPlugin]}
        />
      </div>
    </section>
  )
}
