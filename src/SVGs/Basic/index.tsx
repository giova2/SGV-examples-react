import React from 'react'
import styles from './Basic.module.scss'

const BasicSVG = () => {
  return(<>
  <div className={styles.svgContainer}>
    <h2>Original showing entire image</h2>
    <svg width="100" height="100" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="25" fill="red" />
    </svg>
  </div>
  <hr/>
  <div className={styles.svgContainer}>
    <h2>Scaled to show top left cuadrant</h2>
    <svg width="100" height="100" viewBox="0 0 50 50">
      <circle cx="50" cy="50" r="25" fill="red" />
    </svg>
  </div>
  <div className={styles.svgContainer}>
    <h2>moved the entire scene to the top left</h2>
    <svg width="100" height="100" viewBox="-50 -50 100 100">
      <circle cx="50" cy="50" r="25" fill="red" />
    </svg>
  </div>
  </>);
}

export { BasicSVG as default }