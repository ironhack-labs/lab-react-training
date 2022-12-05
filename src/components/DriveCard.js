import React from 'react'

const DriveCard = (props) => {
    const {name, rating, img, car } = props

    let score = () => {

        switch(Math.round(rating)){
            case 0:
            return '☆☆☆☆☆';

            case 1:
            return '★☆☆☆☆';

            case 2:
            return '★★☆☆☆';

            case 3:
            return '★★★☆☆';

            case 4:
            return '★★★★☆';

            case 5:
            return '★★★★★';
            
        }
            
    }

  return (
    <div>
        <img src={img} alt='driver-card' 
        width={60}
        />
        <p>{name}</p>
        <p>{score(rating)}</p>
        <p>{car.model} - {car.licensePlate}</p>

    </div>
  )
}

export default DriveCard