import React from 'react'

const myStyle1 = {
   backgroundColor: '#ff0000',
   color: '#FFFF',
   border: '1px solid black'
}

const myStyle2 = {
    backgroundColor: '#80ff00',
    border: '1px solid black'
 }

export default function BoxColor(props) {
    return (
        <div>
        <h1>Box Color</h1>
        <div style={myStyle1}>
        <p> rgb(255,0,0)</p>
          <p>#ff0000</p>
          </div>
          <br></br>
          <div style={myStyle2}>
        <p>rgb(128,255,0)</p>
        <p>#80ff00</p>
        </div>
        </div>
    )
}