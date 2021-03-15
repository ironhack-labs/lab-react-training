import React from 'react'

const BoxColor = (props) => {
    return (
        <div>
            <p className="basic-border" style={{
                backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
                padding: "10 0"
            }}>
            rgb({props.r},{props.g},{props.b})
            </p>
        </div>
    )
}

export default BoxColor
