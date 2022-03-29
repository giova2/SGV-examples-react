import React, {useRef, useEffect} from 'react'

const ClockSVG = () => {
  const hours = useRef<SVGLineElement>(null)
  const minutes = useRef<SVGLineElement>(null)

  useEffect(() => {
    setInterval(()=>{
      const hour = new Date().getHours() % 12;
      const minute = new Date().getMinutes();
      hours?.current?.setAttribute("transform", `rotate(${(360 / 12) * hour})`);
      minutes?.current?.setAttribute("transform", `rotate(${(360 / 60) * minute})`);
    }, 10000)
  
    return () => {
      clearInterval()
    }
  }, [])
  

  return(<>
    <h2>Clock</h2>
    <svg width="200" height="200" viewBox="-100 -100 200 200">
      <rect x="-100" y="-100" width="200" height="200" fill="#CD803D" />

      <circle r="55" stroke="#FCCE7B" strokeWidth="10" fill="white" />
      <circle
        r="45"
        stroke="#B6705F"
        stroke-width="6"
        stroke-dasharray="6 17.56194490192345"
        stroke-dashoffset="3"
        fill="none"
      />

      <g stroke="#5f4c6c" stroke-linecap="round">
        <line id="hours" ref={hours} y2="-20" strokeWidth="8" />
        <line id="minutes" ref={minutes} y2="-35" strokeWidth="6" />
      </g>
    </svg>
  </>);
}

export { ClockSVG as default }

