import React from 'react'

const BoxColor = (props) => {

    const componentHex = c => {
        const hex = c.toString(16)
        return hex.length === 1 ? "0" + hex : hex
    }

    const rgbHex = (r, g, b) => {
        return "#" + componentHex(r) + componentHex(g) + componentHex(b);
    }

    return (
        <article className='boxcolor' style={{
            backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        }}>
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>{rgbHex(props.r, props.g, props.b)}</p>
        </article>
    )
}

export default BoxColor