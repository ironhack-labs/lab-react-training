import React from 'react'

const BoxColor = (props) => {
    let {r,g,b} = props


    return(
        <div className="color" style={{backgroundColor: `rgb(${r},${g},${b})`}}>
         <h1>rgb ({r},{g},{b}}) </h1>
        </div>
    )
}

export default BoxColor