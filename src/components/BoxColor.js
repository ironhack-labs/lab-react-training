import React from 'react'

export default function BoxColor({ r, g, b, color, hex }) {
    <div style={{border: "1px black solid", backgroundColor: rgb(r,g,b), color: color}}>
        <p style={{textAlign:"center"}}>rbg({r},{g},{b})<br/>#{hex}</p>
    </div>
}

//tengo problemas con meter el prop del bgcolor dentro del style