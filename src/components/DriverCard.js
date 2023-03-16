import React from 'react'
import Rating from './Rating'

function DriveCard({name, rating, img, car}) {
  return (
    <div className="card m-3 text-white" style={{backgroundColor: `#425cbb`}}>
      <div className="row g-0">
        <div className="col-6 d-flex justify-content-end">
          <img src={img} className="img-fluid float-start p-3" alt="..." style={{objectFit: 'cover', borderRadius: '50%', maxWidth:"150px"}}/>
        </div>
        <div className="col-6">
          <div className="card-body text-start">
            <ul className='p-0'>
              <li style={{textTransform: 'uppercase'}}><b>{name}</b></li>
              <Rating>{rating}</Rating>
              <li>{car.model} - {car.licensePlate}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DriveCard