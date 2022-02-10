import Rating from '../Rating/Rating';
import './DriverCard.css'



function DriverCard({ name, rating, img, car,className }) {

    return (
        <div className='DriverCard  d-flex rounded rounded-3 justify-content-center mb-4  p-4'>
            <div className='img-container mt-4'>
                <img className={`img-driver rounded-circle mb-4 d-flex img-thumbnail ${className} `} src={img} alt="img" />
            </div>
            <div  className='p-4'>
            <h2>{name}</h2>
            <div><Rating className="">{rating}</Rating></div>
            <h5 className='text-license fw-light'>{car.model} - {car.licensePlate}</h5>
            </div>
            
        </div>


    )
}

export default DriverCard