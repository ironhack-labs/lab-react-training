import React from 'react'
import BasicRating from './BasicRating'
import BoxColor2 from './BoxColor2'

const DriverCard = ({ name, rating, img, car:{ model, licensePlate }, className}) => {
  return (
    <BoxColor2 r={69} g={94} b={181} >
      <div className="id-org driver-profile">
        <img src={img} alt='drivers face' className={`driver-id ${className}`}/>
        <section className="driver-info columns">
          <h3 className="border-plus driver-name">{name}</h3>
          <BasicRating className="rating">{rating}</BasicRating>
          <p className="border-plus"> {model} - {licensePlate}</p>
        </section>
      </div>
    </BoxColor2>
  )
}

export default DriverCard
