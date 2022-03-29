import React from 'react'
const ChristmasBall = () => {
  return(
    <>
      <h2>Christmas Ball</h2>
      <svg width="200" height="200" viewBox="-100 -100 200 200">
        <circle 
          cx="0"
          cy="20"
          r="70"
          fill="#D14958" 
        />
        <circle 
          cx="0"
          cy="-75"
          r="12"
          fill="none"
          stroke="#A251ff"/>
        <rect x="-17.5" y="-65" width="35" height="20" fill="#A251ff" />
      </svg>
      <h2>With gradient</h2>
      <svg width="200" height="200" viewBox="-100 -100 200 200">
      <defs>
        <radialGradient id="shine" cx="0.25" cy="0.25" r="0.35">
          <stop offset="0%" stop-color="#e3a8b0" />
          <stop offset="100%" stop-color="#D1495B" />
        </radialGradient>
      </defs>

      <circle cx="0" cy="20" r="70" fill="url(#shine)" />
      <circle
        cx="0"
        cy="-75"
        r="12"
        fill="none"
        stroke="#F79257"
        stroke-width="2"
      />
      <rect x="-17.5" y="-65" width="35" height="20" fill="#F79257" />
    </svg>
    </>
  );
}

export { ChristmasBall as default }