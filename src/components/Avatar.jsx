import React from 'react'
import './DriverCard.css'

function Avatar(props) {
    return (
        <div className="avatar" style={{ backgroundImage: `url(${props.img})` }}>

        </div>
    )
}

export default Avatar