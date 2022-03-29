import React from 'react'

const SnowFlakeSVG = () => {
  return(<>
    <h2>SnowFlake</h2>
    <svg width="200" height="200" viewBox="-100 -100 200 200">
    <defs>
      <path
        id="branch"
        d="
        M 0 0 L 0 -85 
        M 0 -20 L 20 -34 
        M 0 -20 L -20 -34 
        M 0 -40 L 20 -54 
        M 0 -40 L -20 -54 
        M 0 -60 L 20 -74 
        M 0 -60 L -20 -74"
        stroke="#E5C39C"
        stroke-width="5"
      />
    </defs>

    <use href="#branch" />
    <use href="#branch" transform="rotate(60)" />
    <use href="#branch" transform="rotate(120)" />
    <use href="#branch" transform="rotate(180)" />
    <use href="#branch" transform="rotate(240)" />
    <use href="#branch" transform="rotate(300)" />
  </svg>
  </>);
}

export { SnowFlakeSVG as default }