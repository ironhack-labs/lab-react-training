import React from 'react'
import './Numbers.scss'

const Number = ({i}) => {
    const styling = (i) => {
        if (i % 2 === 0) {
            return '#f542dd'
        } else {
            return '#ffffff'
        }
    }
    
    return (
        <div className="Number" style={{backgroundColor: styling(i)}}>
            {i}
        </div>
    )
}

export default Number
