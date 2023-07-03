import React from 'react'

export default function DriverCard({name, rating, img, car}) {
    const displayRating = () => {
        let starRatingResults = '';
        for (let i = 1; i <=5; i++) {
            if (i <= rating) {
                starRatingResults += '★'
            } else {
                starRatingResults += '☆'
            }
        }
        return starRatingResults;
    }

  return (
    <div style={{
            margin: '10px', 
            backgroundColor: '#455EB5', 
            borderRadius: '8px', 
            padding: '10px', 
            display: 'flex',
            justifyContent: 'center' ,
            color: 'white'
        }}>
        <img src={img} style={{height: '80px', width: '80px', borderRadius: '50%'}}/>
        <div style={{paddingLeft: '10px'}}>
            <h5 style={{padding: '0px', margin: '10px 0 0 0'}}>{name}</h5>
            {displayRating()}
            <p style={{padding: '0px', margin: '0px', fontSize: '12px',}}>{car.model} - {car.licensePlate}</p>
        </div>
    </div>
  )
}