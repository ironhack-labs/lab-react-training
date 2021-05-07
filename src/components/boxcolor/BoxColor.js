import React from 'react'
import './BoxColor.css'

const BoxColor = (props) =>{
    const divColor = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`
    } 

    return (
        <section>
            <div style={divColor}>
                {divColor.backgroundColor}
            </div>
        </section>
    )
}

export default BoxColor