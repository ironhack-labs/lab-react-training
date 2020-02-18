import React from 'react'

const BoxColor = (props) => {

    const componentToHex = c => {
        const hex = c.toString(16)
        return hex.length == 1 ? "0" + hex : hex
    }
      
    const rgbToHex = (r, g, b) => {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    return (
        <article className='boxcolor' style={{
            backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        }}>
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>{rgbToHex(props.r, props.g, props.b)}</p>
        </article>
    )
}

export default BoxColor