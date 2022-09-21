import Rating from '../Rating/Rating';
import "./DriverCard.css";

function DriverCard({name, rating, img, car}) {
    // para poder acceder a car  car:[ {model:"Audi A3"}, {licensePlate:"BE33ER"}]
   const model = car[0].model; // car [0] va a ser el modelo
    const lPlate = car[1].licensePlate; // car [1] va a ser el lp
    
    return(
        <div className='driver-container'>
            <div className='driver-img'>
                <img src={img} alt="img" />
            </div>
            <div className='driver-info'>
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <p>{model} – {lPlate}</p>
            </div>
        </div>
    )
}

export default DriverCard
