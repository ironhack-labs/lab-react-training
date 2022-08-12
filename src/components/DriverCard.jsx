import React from 'react'
import './DriverCard.css'
import styled from 'styled-components'

const DriverCard = ({name, rating, img, car}) => {
  return (
    <DriverCardStyled>
        <div className='driver'>
            <div className="image">
                <img src={img} alt={name} />
            </div>
            <div className="data">
                <h2>{name}</h2>
                <h5>{rating}</h5>
                <p>{car.model}-{car.licensePlate}</p>
            </div>
            
        </div>
    </DriverCardStyled>
  )
}

export default DriverCard

const DriverCardStyled = styled.div`
  display: flex;
  // justify-content: center;
  .driver {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`