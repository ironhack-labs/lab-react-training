import React from 'react'

export default function BoxColor(props) {
   const style = {
       backgroundColor: `rgb(${props.r},${props.g},${props.b})`
   }
    return (
        <div style ={style}>
            {`rgb(${props.r},${props.g},${props.b})`}
        </div>
    )
}
