import React from "react";
import "./Random.css";

const Random = ( {min, max} ) => {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    return <p className="Random">Random valuer between {min} and {max} => {randomNum}</p>;
};

export default Random;