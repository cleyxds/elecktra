import React from 'react';

import styles from './styles.module.sass';

import Arrow from '../../assets/arrow.png';

export const PricingTable = () => {
  return (
    <div className={styles.pricingContainer}>
      <div className={styles.individual}>
        <div className={styles.price}>
          <span>$</span>2
        </div>
        <h2>Individual</h2>
        <div className={styles.feature}>
          <h3>Office <span>20 GB</span> </h3>
          <div className={styles.progressOffice} />
        </div>
        <div className={styles.feature}>
          <h3>Home <span>10 GB</span> </h3>
          <div className={styles.progressHome} />
        </div>
        <div className={styles.continue}>
          <button>
            Continue
            <img src={Arrow} alt=""/>
          </button>
        </div>
      </div>
      <div className={styles.shared}>
        <h2>Shared</h2>
      </div>
      <div className={styles.unlimited}>
        <h2>Unlimited</h2>
      </div>
    </div>
  )
}