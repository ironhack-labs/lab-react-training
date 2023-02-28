import React from 'react'

function DriverCard(props) {
    const {name, rating, img, car} = props;

        function stars(rating){
            if (rating < 0.5) return "☆☆☆☆☆"
            else if (rating < 1.5) return "★☆☆☆☆"
            else if (rating < 2.5) return "★★☆☆☆"
            else if (rating < 3.5) return "★★★☆☆"
            else if (rating < 4.5) return "★★★★☆"
            else return "★★★★★"
        }
  return (
    <div>
        <img className='imageLicense' src={img} alt="" />
        <p>{stars(rating)}</p>
        <p>{car.model} - {car.licensePlate}</p>
    </div>
  )

}
  export default DriverCard