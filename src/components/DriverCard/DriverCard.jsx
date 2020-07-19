import React from 'react'
import Rating from '../Rating/Rating'

const DriverCard = props => {
    const driverCardImgContainer = {
        borderRadius: `50%`,
        backgroundImage: 'url(' + props.img + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '128px',
        height: '128px',
        marginRight: '10px'
    }
    return (
        <div className='driverCard'>
           <div style={driverCardImgContainer}>
            </div> 
            <div className='driverCardDetails'>
                <h1>{props.name}</h1>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard
