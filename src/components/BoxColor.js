import React from 'react'

const BoxColor = props => {
    const { r, g, b } = props

    const style = {background: `rgb(${r},${g},${b})`}

    return (
    <div className='boxColor' style={style}>
        <p className='color'>rgb({r},{g},{b})</p>
    </div>
    )
}



export default BoxColor