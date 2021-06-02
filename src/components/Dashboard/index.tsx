import React from 'react';

import BatteriesIcon from '../../assets/Dashboard/battery.svg';
import EnergyIcon from '../../assets/Dashboard/energy.svg';
import GlobeIcon from '../../assets/Dashboard/globe.svg';
import { PricingTable } from '../PricingTable';

import styles from './styles.module.sass';

export const Dashboard = () => {
  return (
    <section className={styles.content}>
      <h1>Dashboard</h1>
      <div>
        <section>
          <h2>Instant</h2>

          <div className={styles.measurements}>
            <span>LOAD</span>
          </div>

          <div className={styles.metrics}>
            <div className={styles.smallFeature}>
              <img src={BatteriesIcon} />
              <div>
                <span className={styles.feature}>Capacity</span>
                <span><strong>3.9 kW</strong></span>
              </div>
            </div>

            <div className={styles.smallFeature}>
              <img src={EnergyIcon} />
              <div>
                <span className={styles.feature}>Total yeld</span>
                <span><strong>10.734</strong> <small> kWh</small></span>
              </div>
            </div>

            <div>
              <img src={GlobeIcon} />
              <div>
                <span className={styles.feature}>CO2 Reduction</span>
                <span><strong>18.9</strong> <small> ton</small></span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.average}>
          <h2>Average</h2>
        </section>
      </div>
    </section>
  )
}
