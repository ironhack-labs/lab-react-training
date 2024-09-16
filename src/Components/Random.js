import React from "react";

let Random = ({min, max}) => {
    return <p>Random number between {min} and {max} is {Math.floor(Math.random() * (max - min + 1) + min)}</p>
}

export default Random