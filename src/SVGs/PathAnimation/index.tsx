import React from 'react'
import styles from './PathAnimation.module.scss'

const PathAnimationSVG = () => {
  return(<>
    <h2> Path based Animation</h2>
    <svg width="400" height="200" viewBox="-200 -100 400 200" fill="none">
      <path
        stroke="#E0CEB9"
        stroke-width="4"
        d="
          M -200 80 L -80 80 Q 80 80 70 -10
          A 70 70 0 0 0 -70 -10
          Q -80 80 80 80 L 200 80"
      />
      <g className={styles.sleigh}>
        <path
          d="
          M -30 -2 L 30 -2 A 10 10 0 0 0 30 -22
          M -20 -2 L -20 -17
          M 20 -2 L 20 -17"
          stroke="#AF6455"
          stroke-width="5"
        />
        <path d="M -27 -17 L 27 -17" stroke="#7A504F" stroke-width="6" />
      </g>
    </svg>
  </>);
}

export { PathAnimationSVG as default }