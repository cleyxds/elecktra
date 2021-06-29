import React, { useEffect, useState } from 'react';

import BatteriesIcon from '../../assets/Dashboard/battery.svg';
import EnergyIcon from '../../assets/Dashboard/energy.svg';
import GlobeIcon from '../../assets/Dashboard/globe.svg';
import { api } from '../../services/api';

import styles from './styles.module.sass';

export const Dashboard = () => {
  const [measurement, setMeasurement] = useState(0);

  useEffect(() => {
    RetrieveData();
    
    setInterval(RetrieveData, 2000)
  }, []);

  function RetrieveData() {
    api.get('/data')
      .then((response) => {
        setMeasurement(response.data[0].measurement);
      });
  }

  return (
    <section className={styles.measurementsContainer}>
      <h1>Dashboard</h1>
      <div>
        <section className={styles.performance}>
          <h2>Performance</h2>
          <div className={styles.measurements}>
            <div className={styles.graphics} style={{ transform: `scale(${(measurement/5500)*2})` }}/>
            <div className={styles.statistics}>
              <h4>Consumo instanâneo</h4>

              <strong>{measurement} <sup>W</sup></strong>

              <p>Aumento de +12%</p>
            </div>
            <select autoFocus name="options" defaultValue="Instant" className={styles.selector}>
              <option value="Instant">Instanâneo</option>
              <option value="Daily">Diário</option>
            </select>
          </div>
          <div className={styles.metrics}>
            <div className={styles.smallFeature}>
              <img src={BatteriesIcon} />
              <div>
                <span className={styles.feature}>Capacidade</span>
                <span><strong>45 Ah</strong></span>
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
  )
}
