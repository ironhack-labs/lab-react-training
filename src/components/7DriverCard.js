import React from 'react'
import Rating from './6Rating.js'

const DriverCard = (props) => {
    const cardStyle = {
        backgroundColor : '#425cbb',
        borderRadius: '10px',
        color: '#fff',
        margin: '10px',
        padding: '10px',
        display: 'flex',
        width: '500px',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const profileStyle = {
        height: '100px',
        width: '100px',
        borderRadius: '50%',
        overflow: 'hidden',
        textAlign: 'center',
        margin: '10px'
    }
    const imgStyle = {
        height: '100px',
        width: 'auto',
        objectFit: 'cover'
    }
    const leftStyle = {
        lineHeight: '10px'
    }

    return (
        <div style={cardStyle}>
            <div style={profileStyle}>
                <img style={imgStyle} src={props.img} />
            </div>
            <div style = {leftStyle}>
                <p style={{fontSize: '1.5em', fontWeight: 'bold'}}>{props.name}</p>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard