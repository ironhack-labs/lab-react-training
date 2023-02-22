import React from 'react'

const DriverCard = (props) => {
   
  const { name, rating, img, car} = props


  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;
  const filledStar = '★';
  const emptyStar = '☆';


  return (
    <div className=''>
      <div className='DriverCard'>
      <img className='imgDriver' src={img}/>
       
       <div>
       <p>{name}</p>
       {[...Array(filledStars)].map((_, i) => (
       <span key={i}>{filledStar}</span>
     ))}
     {[...Array(emptyStars)].map((_, i) => (
       <span key={i}>{emptyStar}</span>
     ))}
     
     <p>{car.model}-{car.licensePlate}</p>
       </div> 
      </div>

    </div>
  )
}

export default DriverCard