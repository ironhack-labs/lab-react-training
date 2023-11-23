import React from 'react'

const DriverCard = (props) => {
    const { name, rating, img, car } = props

    const stars = Math.round(rating)
    const starIcons = '★'.repeat(stars) + '☆'.repeat(5 - stars)

    return (
        <div className="driver-card">
            <img src={img} alt="Driver" />
            <div>
                <h2>{name}</h2>
                <p>{starIcons}</p>
                <p>{`${car.model} - ${car.licensePlate}`}</p>
            </div>
        </div>
    )
}

export default DriverCard