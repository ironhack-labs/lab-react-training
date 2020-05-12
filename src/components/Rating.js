import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import "../index.css";

const Rating = (props) => {
    let stars = [...Array(5)];
    let rating = props.children;
    rating = Math.round(rating);

    return (
        <div className="rating-container">
            {stars.map((star, index) =>
                rating <= index ?
                    <FaRegStar key={index} className="star-rating" size={40} /> : <FaStar key={index} className="star-rating" size={40} />
            )}
        </div>
    )
}

export default Rating;
