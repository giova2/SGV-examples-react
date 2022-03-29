import React from 'react'
import styles from './GingerBread.module.scss'

const GingerBreadSVG = () => {
  return(
    <>
      <h2>Ginger Bread</h2>
      <svg className={styles.gingerbread} width="200" height="200" viewBox="-100 -100 200 200">
        <circle className={styles.body} cx="0" cy="-50" r="30" />

        <circle className={styles.eye} cx="-12" cy="-55" r="3" />
        <circle className={styles.eye} cx="12" cy="-55" r="3" />
        <rect className={styles.mouth} x="-10" y="-40" width="20" height="5" rx="2" />

        <line className={styles.limb} x1="-40" y1="-10" x2="40" y2="-10" />
        <line className={styles.limb} x1="-25" y1="50" x2="0" y2="-15" />
        <line className={styles.limb} x1="25" y1="50" x2="0" y2="-15" />

        <circle className={styles.button} cx="0" cy="-10" r="5" />
        <circle className={styles.button} cx="0" cy="10" r="5" />
      </svg>
    </>
  );
}

export { GingerBreadSVG as default }

