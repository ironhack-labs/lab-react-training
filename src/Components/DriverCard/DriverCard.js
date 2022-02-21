import Rating from '../Rating/Rating'

const DriverCard = props => {

    const { name, rating, img, car } = props  // dentro de car model y lecesePlate puedo 

    return (
        <div>
            <img src={img} alt="profile"></img>
                <p>{name}</p>
                <Rating>{rating}</Rating>
                <p>{car.model} {car.licensePlate}</p>
           
        </div>
    )



}

export default DriverCard