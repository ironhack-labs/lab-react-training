import React from 'react'

const BoxColor = ({r, g, b}) => {
  const [rHex, gHex, bHex] = [r, g, b].map(c => parseInt(c).toString(16));

  return (
    <div style={{ border: `1px solid #000`, margin: `.5rem`, padding: `2rem`, height: `5.5rem`, backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <p>{`rgb(${r}, ${g}, ${b})`}</p>
      <p>{`#${rHex}${gHex}${bHex}`}</p>
      </div>
  )
}

export default BoxColor 