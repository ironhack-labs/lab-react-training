import React from 'react'
import './BoxColor.css'

const BoxColor = (props) => {
    const {r, g, b} = props;
    const style = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }

    return (
        <div className="box-color" style={style}>
            <p> rgb({r},{g},{b})</p> 
        </div>
    )
}

export default BoxColor
