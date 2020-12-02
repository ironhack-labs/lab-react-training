import React from 'react'
import Rating from '../Rating/Rating'

const DriverCard = (props) => {
    const {name, rating, img, car:{model}, car:{licensePlate} } = props
    console.log(licensePlate)
    return (
        <div className='driver-card'>
        <h2></h2>
            
        </div>
    )
}

export default DriverCard
