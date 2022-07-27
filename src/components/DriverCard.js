import Rating from "./Rating";

function DriverCard({name, rating, img, car}){

    return(
        <div className="id-driver">
            <img src={img} alt="" />
            <div className="driver-data">
                <p> <b>{name}</b></p>
                <p><Rating> {rating}</Rating></p>
                <p>{car.model} = {car.licensePlate}</p>
            </div>
        </div>
    );
}

export default DriverCard;