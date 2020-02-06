import React from "react";
import Rating from "./Rating";
import "./DriverCard.css";

const DriverCard = ({ name, rating, img, car }) => {
	return (
		<div className="card driver-card m-5 bg-primary w-50 d-flex flex-row align-content-center">
			<div className="col">
				<img src={img} alt="..." className="driver-card-img mt-2" />
			</div>
			<div className="col pt-5">
				<h3>{name}</h3>
				<p>
					{car.model} - {car.licensePlate}
				</p>
				<div className="rating">
					<Rating rate={rating} />
				</div>
				
			</div>
		</div>
	);
};

export default DriverCard;