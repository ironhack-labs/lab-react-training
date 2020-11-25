import React from 'react'
import styled from 'styled-components'

const DriverCard = ({name, rating, img, car}) => {
    const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4267B2;
    color: white;
    width: 80%;
    height: 150px;
    margin: 10px;
    border-radius: 15px;
    `
    let stars = []
    let emptyStars = ['☆','☆','☆','☆','☆']
    for (let i = 0; i<Math.round(rating); i++) {
        stars.push("★")
        emptyStars.pop('☆')
    }

    return (
        <Card>
            <img src={img} alt='' style={{
                borderRadius: 60,
                height: 120,
                width: 120
            }}/>
            <div>
                <h3>{name}</h3>
                <p>{stars}{emptyStars}</p>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </Card>
    )
}

export default DriverCard
