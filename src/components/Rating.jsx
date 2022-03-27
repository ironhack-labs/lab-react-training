import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

function CreateRatingStars(rating) {
    const arrayNumbers = Array(5).keys();
    const arrayStars = [...arrayNumbers].map( ( index ) => {
        const typeStar = index < rating ? faStarSolid : faStarRegular;
        return (<FontAwesomeIcon key={index} icon={typeStar} />);
    });
    return arrayStars;
}

const Rating = (props) => {
    const { children } = props;
    const ratingRounded = Math.round(Number(children));
    const stars = CreateRatingStars(ratingRounded);

    console.log (ratingRounded);

    return (
        <div>{stars}</div>
    );
};

export default Rating;