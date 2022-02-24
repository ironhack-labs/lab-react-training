import React from 'react'
export default function BoxColor(props) {
  let rHex = (props.r).toString(16)
  let gHex = (props.g).toString(16)
  let bHex = (props.b).toString(16)

  if(rHex < 10){
    rHex = `0${rHex}`
  }
  if (gHex < 10){
    gHex = `0${gHex}`
  }
  if (bHex < 10){
    bHex = `0${bHex}`
  }

  const divStyle = {
    backgroundColor: `#${rHex}${gHex}${bHex}`,
    color: 'white'
  };
  
  return (
    <div style={divStyle}>
      <p>rgb({props.r},{props.g},{props.b})</p>
      <p>#{rHex}{gHex}{bHex}</p>
    </div>
  )
}

