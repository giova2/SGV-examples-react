import React from 'react'
const ChristmasTree = () => {
  return(
    <>
      <h2>Christmas Tree</h2>
      <svg width="200" height="200" viewBox="-100 -100 200 250">
        <polygon points="0,0 80,120 -80,120" fill="#234236" />
        <polygon points="0,-40 60,60 -60,60" fill="#0C5C4C" />
        <polygon points="0,-80 40,0 -40,0" fill="#387558" />
        <rect x="-20" y="120" width="40" height="30" fill="#A251ff" />
      </svg>
    </>
  );
}

export { ChristmasTree as default }