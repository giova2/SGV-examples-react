import React from 'react'
import style from './BackgroundPattern.module.scss'

const BackgroundPattern = () => {
  return(<>
    <h2>Background Pattern</h2>
    <div className={style.background} />
    </>
  );
}

export { BackgroundPattern as default }