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
          <div className={`${styles.progress} ${styles.office}`} />
        </div>
        <div className={styles.feature}>
          <h3>Home <span>10 GB</span> </h3>
          <div className={`${styles.progress} ${styles.home}`} />
        </div>
        <div className={styles.continue}>
          <button>
            Continue
            <img src={Arrow} alt=""/>
          </button>
        </div>
      </div>
      <div className={styles.shared}>
        <div className={styles.price}>
          <span>$</span>6
        </div>
        <h2>Shared</h2>
        <div className={styles.largeFeature}>
          <p>Family</p>
          <h3>100 GB</h3>
        </div>
        <div className={styles.continue}>
          <button>
            Continue
            <img src={Arrow} alt=""/>
          </button>
        </div>
        <div className={styles.waves} />
      </div>
      <div className={styles.unlimited}>
        <div className={styles.lines} />
        <div className={styles.price}>
          <span>$</span>9
        </div>
        <h2>Unlimited</h2>
        <div className={styles.largeFeature}>
          <p>Infinite share</p>
          <h3>1 Year</h3>
        </div>
        <div className={styles.continue}>
          <button>
            Continue
            <img src={Arrow} alt=""/>
          </button>
        </div>
      </div>
    </div>
  )
}