import React from 'react'
import "../styles/DriverCard.css"

const DriverCard = (props) => {

    const num = Math.round(props.rating);

    let starOne = num < 1 ? "empty__driver" : "full";
    let starTwo = num < 2 ? "empty__driver" : "full";
    let starThree = num < 3 ? "empty__driver" : "full";
    let starFour = num < 4 ? "empty__driver" : "full";
    let starFive = num < 5 ? "empty__driver" : "full";

    return (
        <div className="box__driver">
            <div className="inner-box">
                <img className="driver-photo" src={props.img} alt="driver"/>
                <div className="info">
                    <h3>{props.name}</h3>
                    <div className="stars">

                        <span className={`fa fa-star ${starOne}`} ></span>
                        <span className={`fa fa-star ${starTwo}`}></span>
                        <span className={`fa fa-star ${starThree}`}></span>
                        <span className={`fa fa-star ${starFour}`}></span>
                        <span className={`fa fa-star ${starFive}`}></span>
                            

                    </div>
                    <p>{props.car.model} - {props.car.licensePlate}</p>
                </div>
            </div>
            
        </div>
    )
}

export default DriverCard
