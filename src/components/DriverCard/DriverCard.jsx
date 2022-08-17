import React from 'react'

function DriverCard(props) {
  const {name, rating, img, car} = props
  return (
    <div>
        <div><img src={img} alt="" className='cardImage'/></div>
        <h3>{name}</h3>
    </div>
  )
}

export default DriverCard