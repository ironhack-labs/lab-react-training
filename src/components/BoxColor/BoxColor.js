import React from 'react';

function BoxColor({r,g,b, color}){
  let rHex = r.toString(16)
  let gHex = g.toString(16)
  let bHex = b.toString(16)
  if(rHex.length === 1) rHex = '0' + rHex
  if(gHex.length === 1) gHex = '0' + gHex
  if(bHex.length === 1) bHex = '0' + bHex

  return(
    <div className='container-col'
    style={{backgroundColor: `rgb(${r}, ${g}, ${b})`, color: color}}
    >
      <p>{`rgb(${r}, ${g}, ${b}}`}</p>
      <p className='margin-top'>{`#${rHex}${gHex}${bHex}`}</p>
    </div>
  )
}

export default BoxColor