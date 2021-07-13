import React from 'react'

export default function BoxColor(props) {
  //ask how to do the background coor properly
  //let color = '201, 76, 76';
  return (
    <>
      <div style={{ width: '100%', height:'100px', margin: '10px', border: '1px solid black', backgroundColor: `rgb(${props.r},${props.g},${props.b})`}}>
          <p>rgb({props.r},{props.g},{props.b})</p>
      </div>
    </>
  )
}