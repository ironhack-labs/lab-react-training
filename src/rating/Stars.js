import React from 'react'

const Stars = (props) => {
    const {star,elemClass}= props
    return (
        <>
            <span className={elemClass}>{star}</span>
        </>
    )
}

export default Stars
