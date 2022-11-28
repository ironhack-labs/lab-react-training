import './DriverCard.css'

const Random = props => {
  const { name, rating, img, car } = props 
   const newRating = Math.round(rating);
   

    return (
        <div className="DriverCard">
                <h3> Type {name}</h3>
                <img src={img} alt="DriveCards"></img>
                <p>{'★'.repeat(newRating) + '☆'.repeat(5 - newRating)}</p>
                <p>  {car.model} - {car.licensePlate}</p>        
       </div>
   
    )

   }


export default Random