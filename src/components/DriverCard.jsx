const DriverCard = ({name, rating, img, car}) => {

    
      return (
        <div>
            <img className="driverPic" alt="driverPicture" src={img}/>
            <div className="driverInfo">
                <h2>{name}</h2>
                <h2>{rating}</h2>
            <span className="driverCar">
                <p>{car.model} - </p>
                <p>{car.licensePlate}</p>
            </span>
            </div>
        </div>
      );
}

export default DriverCard;