import React, { useContext, useEffect } from 'react'

import { Line } from 'react-chartjs-2'

import { Chart, ChartData, ChartOptions } from 'chart.js'

import { StreamingPlugin, RealTimeScale } from 'chartjs-plugin-streaming'
import 'chartjs-adapter-date-fns'

import { io, Socket } from 'socket.io-client'

import { IMeasurement } from '../../contexts/DashboardContext'

import styles from './average.module.sass'

const SOCKET_IO_CONNECTION: string = process.env.REACT_APP_SOCKETIO_SERVER as string

export const Average = () => {
  Chart.register(StreamingPlugin)
  Chart.registry.addScales(RealTimeScale)

  let socket: Socket

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

  const updateChart = (chart: Chart) => {
    socket.on('measurement', message => {
      const measurementMessage = message as IMeasurement

      chart.data.datasets[0].data.push({
        x: Date.now(),
        y: measurementMessage.measurement
      })

      chart.update('quiet')
    })
  }

  useEffect(() => {
    socket = io(SOCKET_IO_CONNECTION)
  }, [])


  useEffect(() => {
    const chart = Chart.instances[0]
    updateChart(chart)
  }, [])

  return (
    <section className={styles.averageContainer}>
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
