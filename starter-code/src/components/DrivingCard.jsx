import React from "react";
import Rating from "./Rating";

const DrivingCard = ({ numberOfStars }) => Rating(Math.floor(numberOfStars));

export default DrivingCard;
