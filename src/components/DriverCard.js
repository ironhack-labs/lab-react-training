//jshint esversion:8
import { Rating } from "./Rating";

export const DriverCard = ({ name, rating, img, car }) => {

    return (
        <div className="Driver">
            <div className="driver-image">
                <img src={img} alt="driver"/>
            </div>
            <div>
                <h3>{name}</h3>
                <Rating className="driver-rating">{rating}</Rating>
                <span>{car.model}</span> - <span>{car.licensePlate}</span>
            </div>
        </div>
    );
};