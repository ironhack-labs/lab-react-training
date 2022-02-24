import React from "react";

function Rating(props) {
    const { stars } = props;

    const noFilled = (stars > 0) ? [...Array(Math.round(stars)).keys()] : undefined;
    const noEmpty = (stars < 5) ? [...Array(5 - Math.round(stars)).keys()] : undefined;

    return (
        <div>
            { noFilled?.map(() => <span role="img" aria-label="filled-star">★</span>) }
            { noEmpty?.map(() => <span role="img" aria-label="empty-star">☆</span> ) }
        </div>
    );
}

export default Rating;