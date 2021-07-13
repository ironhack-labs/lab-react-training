import React from "react"
import PropTypes from "prop-types";
import Rating from "./Rating";

function DriverCard ({name, rating, img, car}){
    return(
    <div className="card-box-4" style ={{display: "inline-flex"}}>
        <img src={img} width="150px" height="165px" alt=""></img>
        <div className="test">
            <p><strong>{name} </strong> </p>
            <Rating>{rating}</Rating>
            <p> {car.model} {car.licensePlate}</p>
        </div>
    </div>
    )
}

DriverCard.propTypes = {
    name: PropTypes.string,
    rating: PropTypes.number,
    img: PropTypes.string,
}

export default DriverCard