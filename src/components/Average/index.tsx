import React, { useContext, useEffect, useState } from 'react'

import {
  Line,
  LineChart,
  XAxis,
  YAxis
} from 'recharts'

import { format } from 'date-fns'

import { DashboardContext } from '../../contexts/DashboardContext'

import styles from './average.module.sass'

interface IChartData {
  timestamp: string
  watts: number
}

export const Average = () => {
  const [data, setData] = useState([] as IChartData[])
  const { currentMeasurement } = useContext(DashboardContext)

  useEffect(() => {
    data.length === 120 && data.splice(0, data.length)

    const chartData = [
      {
        timestamp: format(new Date(), "hh:mm:ss a"),
        watts: currentMeasurement()
      }
    ]

    setData([...data, chartData[0]])
  },[currentMeasurement])
  

  return (
    <section className={styles.averageContainer}>
      <h2>Média</h2>
      <div className={styles.live}>
        <LineChart 
          width={400} 
          height={200} 
          data={data}
        >
          <XAxis dataKey='timestamp' />
          <YAxis />
          <Line dataKey='watts' stroke='#8884D8FF' />
        </LineChart>
      </div>
    </section>
  )
}
