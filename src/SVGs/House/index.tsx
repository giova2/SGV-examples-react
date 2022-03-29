import React from 'react'
import styles from './House.module.scss'

const House = () => {
  return(
    <>
      <h2>House</h2>
      <svg className={styles.house} width="200" height="200" viewBox="-100 -100 200 200">
        <polygon className={styles.wall} points="-65,80 -65,-10 0,-70 65,-10 65,80" />
        <polyline className={styles.roof} points="-75,-8 0,-78 75,-8" />

        <rect className={styles.door} x="-45" y="10" width="30" height="60" />
        <circle className={styles.doorKnob} cx="-35" cy="40" r="2" />
        <rect className={styles.stair} x="-47" y="70" width="34" height="5" />
        <rect className={styles.stair} x="-49" y="75" width="38" height="5" />

        <rect className={styles.window} x="5" y="15" width="40" height="35" />
        <line x1="5" y1="32.5" x2="45" y2="32.5" />
        <line x1="25" y1="15" x2="25" y2="50" />
        <rect className={styles.windowSill} x="2" y="48" width="46" height="5" />

        <circle className={styles.window} cx="0" cy="-25" r="15" />
        <line x1="-15" y1="-25" x2="15" y2="-25" />
        <line x1="0" y1="-40" x2="0" y2="-10" />
      </svg>
    </>
  );
}

export { House as default }