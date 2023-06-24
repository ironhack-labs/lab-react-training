import React from 'react'


function BoxColor({r, g, b, children}) {


  return (
    <div  className="Greeting" style={{backgroundColor:`rgb(${r}, ${g}, ${b})`}}> {children}</div>


   

  )
}


export default BoxColor;