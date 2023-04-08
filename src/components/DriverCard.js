import Rating from './Rating'

function DriverCard({name, rating, img, car: {model, licensePlate}}){

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary driver-card p-2 m-2">
            <div className="driver-picture-container">
                <img className="driver-picture" src={img} />
            </div>
            <div className='d-flex flex-column ms-3'>
                <div className='driver-name d-flex'> {name} </div>
                <Rating>{rating}</Rating>
                <div className='text-white d-flex'> {model} - {licensePlate} </div>
            </div>
        </div>
    )

}

export default DriverCard