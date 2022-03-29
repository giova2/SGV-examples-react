import React, {useState} from 'react'
import styles from './Interaction.module.scss'

const BasicSVG = () => {
  const [lightOn, setLightOn] = useState(false)
  
  return(<>
    <svg className={styles.lights} width="300" height="300" viewBox="-100 -100 200 260">
      <defs>
        <g id="bulb">
          <path d="M 0,0 Q 20 25 0 40 Q -20 25 0 0" />
          <rect x="-6" y="-1" width="12" height="10" rx="3" fill="#5F4C6C" />
        </g>
      </defs>

      <path d="M -140 -60 Q -70 -50 0 -60 Q 110 -70 110 10" />
      <line x1="-70" y1="-15" x2="-70" y2="-55" />
      <line x1="30" y1="-25" x2="30" y2="-60" />
      <use className="b" href="#bulb" x="-120" y="-45" transform="rotate(5)" fill={lightOn ? 'white' : "#FFC05B"} />
      <use className="b" href="#bulb" x="-70" y="-15" fill={lightOn ? 'white' : "#F86285"} />
      <use className="b" href="#bulb" x="-20" y="-57" transform="rotate(-5)" fill={lightOn ? 'white' : "#03A8A8"} />
      <use className="b" href="#bulb" x="30" y="-25" fill={lightOn ? 'white' : "#748CEF"} />

      <rect x="90" y="10" width="40" height="40" fill="lightgray" />
      <circle id="button" cx="110" cy="30" r="15" fill="red" onClick={() => setLightOn(!lightOn)}/>
    </svg>
  </>);
}

export { BasicSVG as default }