import React from 'react'
import '../App.css'

function BoxColor(props){
    const boxStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
    }
    return(
        <section className='BoxColor' style={boxStyle}>
            <p>rgb({props.r}, {props.g}, {props.b})</p>
        </section>
    )
    }

export default BoxColor