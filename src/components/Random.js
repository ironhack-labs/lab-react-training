import React from 'react'

export default function Random(props) {
    function aleatorio(min, max) {
        return Math.floor(Math.random() * max) + min
    }
    return (
        <div  style={{border:'1px solid', margin:'10px'}}>
            <p>Random value between {props.min} and {props.max} = {aleatorio(props.min, props.max)}</p>  
        </div>
    )
}
