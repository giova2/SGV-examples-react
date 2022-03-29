import React from 'react'
import styles from './ForestSnowing.module.scss'
import classnames from 'classnames'

const ForestSnowingSVG = () => {
  return(<>
    <h2>Forest Snowing</h2>
    <svg width="200" height="200" viewBox="-100 -100 200 200">
      <defs>
        <g id="tree">
          <polygon points="-10,0 10,0 0 -50" fill="#38755b" />
          <line x2="0" y2="10" stroke="#778074" strokeWidth="2" />
        </g>
      <circle id="big" cx="0" cy="0" r="5" fill="white" />
        <circle id="small" cx="0" cy="0" r="3" fill="white" />
      </defs>

      <rect
        x="-100"
        y="-100"
        width="200"
        height="200"
        fill="#F1DBC3"
      />
      <circle cx="0" cy="380" r="350" fill="#F8F4E8" />

      <use href="#tree" x="-30" y="25" transform="scale(2)" />
      <use href="#tree" x="-20" y="40" transform="scale(1.2)" />
      <use href="#tree" x="40" y="40" />
      <use href="#tree" x="50" y="30" transform="scale(1.5)" />

      <use href="#big" x="0" y="0" className={classnames(styles.flake,styles.fast)} />
      <use href="#big" x="-50" y="-20" className={classnames(styles.flake, styles.fast, styles.opaque)} />
      <use href="#big" x="30" y="-40" className={classnames(styles.flake,styles.fast)} />
      <use href="#big" x="50" y="-20" className={classnames(styles.flake, styles.fast, styles.opaque)} />
      <use href="#big" x="30" y="50" className={classnames(styles.flake,styles.slow)} />
      <use href="#big" x="-70" y="-80" className={classnames(styles.flake, styles.slow, styles.opaque)} />
      <use href="#big" x="30" y="50" className={classnames(styles.flake, styles.slow)} />
      <use href="#big" x="90" y="-80" className={classnames(styles.flake, styles.slow, styles.opaque)} />
      <use href="#small" x="10" y="-50" className={classnames(styles.flake, styles.slow)} />
      <use href="#small" x="-50" y="-60" className={classnames(styles.flake, styles.slow, styles.opaque)} />
      <use href="#small" x="30" y="70" className={classnames(styles.flake, styles.slow)} />
      <use href="#small" x="10" y="-80" className={classnames(styles.flake, styles.slow, styles.opaque)} />
    </svg>
  </>);
}

export { ForestSnowingSVG as default }
