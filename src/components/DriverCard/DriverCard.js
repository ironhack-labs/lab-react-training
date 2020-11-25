import React from "react";
import Rating from "../Rating/Rating"

const DriverCard = (props) => {

    return (
        <div className="DriverCard-container">

            <div>
                <img src={props.img} alt="profolPic" />
            </div>

            <div> <b>{props.name}</b> </div>

            <div> 
            <Rating>{props.rating} </Rating>
            </div>

            <div>{props.car.model} -{props.car.licensePlate} </div>

        </div>
    )
};

export default DriverCard;