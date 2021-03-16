import React from "react";
import Rating from './../Components/Rating';
// import "../styles/DriverCard.css";

const DriverCard = (props) => {
    return (
        <div className="DriverCard" >
            {
                <div>
                    <span>
                        <img src={props.img} alt="picture" style={{width: 150}}/><br />
                
                        {props.name} <br />
                        <Rating>
                            {props.rating}
                        </Rating><br />
                        {props.car.model} <br />
                        {props.car.licensePlate} <br />
                    </span>
                </div>
            }
        </div>);
};

export default DriverCard;