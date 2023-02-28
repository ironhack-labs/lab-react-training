import React from 'react'

function DriverCard(props) {

    const {name, rating, img, car} = props

    const filledStars = Math.round(rating)
    const emptyStars = 5 - filledStars
    const filledStar = '★'
    const emptyStar = '☆'
  return (

    <div className='license'>
    <img className="imgDriver" src={img} alt="imgDriver" />
        <div>
            <p>{name}</p>
            <div>
               {[...Array(filledStars)].map((_, i) => (
                  <span key={i}>{filledStar}</span>))}
               {[...Array(emptyStars)].map((_, i) => (
                 <span key={i}>{emptyStar}</span>))}
            </div>
           <p>{car.model}-{car.licensePlate}</p>
        </div>
    </div>

  )
}

export default DriverCard