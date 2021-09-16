import React, { useContext, useEffect } from 'react'

import { Chart, ChartData, ChartDataset, ChartOptions } from 'chart.js'

import { Line } from 'react-chartjs-2'

import { StreamingPlugin, RealTimeScale } from 'chartjs-plugin-streaming'
import 'chartjs-adapter-date-fns'

import { DashboardContext } from '../../contexts/DashboardContext'

import styles from './average.module.sass'

export const Average = () => {
  // const { currentMeasurement } = useContext(DashboardContext)

  console.log('Render fora')

  Chart.register(StreamingPlugin)
  Chart.registry.addScales(RealTimeScale)

  const data: ChartData = {
    datasets: [{
      label: 'Watts',
      data: [],
      backgroundColor: '#7733CC',
      borderColor: '#BB99E6',
      borderWidth: 1
    }]
  }

  const options: ChartOptions = {
    interaction: {
      intersect: false
    },
    scales: {
      x: {
        type: 'realtime',
        realtime: {
          onRefresh: (chart: Chart) => {
            chart.data.datasets.forEach((dataset: ChartDataset) => {
              dataset.data.push({
                x: Date.now(),
                y: Math.floor(Math.random() * 1000)
              })
            })
          },
        }
      },
      y: {
        beginAtZero: true
      }
    }
  }

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
