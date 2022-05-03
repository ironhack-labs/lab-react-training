import "./DriverCard.css"

const DriverCard = ({ name, rating, img, car }) => {

    
  
    return (
        <div className="card">
            <p>{name}</p>
            <p>{rating}</p>
            <p>{car.model}</p>
            <p>{car.licensePlate}</p>
            <img src={img} alt={name} />
        </div>
     
    )
    
    
   
}

export default DriverCard