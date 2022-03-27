import React from "react";

const Random = (props) => {
    const { min, max } = props;
    const random = Math.floor(Math.random()*(max-min+1))+min;
    return(
        <div>
            <h1>Random value between {min} and {max} => {random}</h1>
        </div>
    );
}

export default Random;