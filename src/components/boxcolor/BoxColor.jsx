import React from 'react'
import P from 'prop-types'


const BoxColor = ({r,g,b}) =>{
  let rgb = `rgb(${r},${g},${b})`

  return (
    <div className="boxcolor-container" style={{height: '100px', width: '100%', textAlign: 'center', backgroundColor:`${rgb}`}}>
      {rgb}
    </div>
  )
}

export default BoxColor;