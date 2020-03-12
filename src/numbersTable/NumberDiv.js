import React from 'react'

const NumberDiv = ({number}) => {
    const bgColor = number % 2 === 0 ? 'red': ''
    return (
            <div className='number' style={{backgroundColor: bgColor} }>
                {number}
            </div>

    )
}

export default NumberDiv
