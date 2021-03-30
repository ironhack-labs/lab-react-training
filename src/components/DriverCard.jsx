import '../assets/css/DriverCard.css'
import Rating from  './Rating'
const DriverCard = ({name, rating, img, car}) => {

    return (
        <div className="container DriverCard__style">
            <div className="row">
                <div className="col">
                    <img src={img} alt='Profile image' className='col driver__image' height='100'/>
                </div>
                <div className="col">
                    <h2>{name}</h2>
                    <Rating>{rating}</Rating>
                    <div>
                        <span>{car.model}</span> - <span>{car.licensePlate}</span>
                    </div>
                </div>
            </div>
        </div>

       /*  <div className="d-flex DriverCard justify-content-center row">
            <div className="col">
              
            </div>
            <div className='d-flex col'>
               
            </div>
        </div> */
    )
  }

export default DriverCard 