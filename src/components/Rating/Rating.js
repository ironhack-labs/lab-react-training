import React from "react";

const Rating = (props) => {

    let num = Math.round(props.children);
    let numOfStars;
    switch (num) {
        case 1:
            numOfStars = '★☆☆☆☆';
            break;
        case 2:
            numOfStars = '★★☆☆☆';
            break;
        case 3:
            numOfStars = '★★★☆☆';
            break;
        case 4:
            numOfStars = '★★★★☆';
            break;
        case 5:
            numOfStars = '★★★★★';
            break;
        default:
            numOfStars = '☆☆☆☆☆';
    }
    return (
        <div className="Rating-container">
            <h1>
                {numOfStars}
            </h1>
        </div>
    )
};

export default Rating;