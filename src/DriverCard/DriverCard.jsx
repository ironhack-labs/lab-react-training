import "./DriverCard.css"

const DriverCard = ({ name, rating, img, car }) => {

    let star = ""

    if (rating < 1) {
        star = "☆☆☆☆☆"   
    }
    
     if (rating >= 1 && rating < 2 ) {
        star = "★☆☆☆☆"   
    }
    
     if (rating >= 2 && rating < 3 ) {
        star = "★★☆☆☆"   
    }
    
     if (rating >= 3 && rating < 4 ) {
        star = "★★★☆☆"   
    }
  if (rating >= 4 && rating < 5) {
        star = "★★★★☆"   
    }

  if (rating == 5 ) {
        star = "★★★★★"   
    }

    
  
    return (
        <div className="card">
            <p>{name}</p>
            <p>{star}</p>
            <p>{car.model}</p>
            <p>{car.licensePlate}</p>
            <img src={img} alt={name} />
        </div>
     
    )
    
    
   
}

export default DriverCard