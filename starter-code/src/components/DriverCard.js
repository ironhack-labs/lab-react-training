import React from 'react'
import { DriverStyles } from '../styles/styles'
import Rating from './Rating'

// name="Travis Kalanick"
// rating={4.2}
// img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
// car={{
//   model: "Toyota Corolla Altis",
//   licensePlate: "CO42DE"

const DriverCard = ({name, rating, img, car}) => {
    let stars = Math.round(rating)
    return (
        <DriverStyles>
            <img src={img}/>
            <div>
            <p>{name}</p>
            <Rating>
            {stars === 0 ? (<p>☆☆☆☆☆</p>) : stars === 1 ? (<p>✭☆☆☆☆</p>) : stars === 2 ? (<p>✭✭☆☆☆</p>) : stars === 3 ? (<p>✭✭✭☆☆</p>) : stars === 4 ? (<p>✭✭✭✭☆</p>) : (<p>✭✭✭✭✭</p>)}
            </Rating>
            <p>{car.model} {car.licensePlate}</p>
            </div>
        </DriverStyles>
    )
}

export default DriverCard
