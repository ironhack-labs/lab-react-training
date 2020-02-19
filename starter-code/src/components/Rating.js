import React from "react";

function Rating(props) {
    let rating = Math.round(props.children);
    let stars = [];

    for (let i = 1; i <= rating ; i++) {
        stars.push("★");
    }

    for (let i = stars.length; i < 5; i++) {
        stars.push("☆");
    }
    return (
        <div className="Rating">
            <p>{stars.join("")}</p>
        </div>
    )
}

export default Rating;