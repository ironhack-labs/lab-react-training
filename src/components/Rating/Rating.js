import React from "react";

function Rating({children}){
    let stars;
    let rating = Math.round(children);
    switch (rating){
        case 1: 
            stars = "★☆☆☆☆";
        break;
        case 2:
            stars = "★★☆☆☆";
        break;
        case 3:
            stars = "★★★☆☆";
        break;
        case 4:
            stars = "★★★★☆";
        break;
        case 5:
            stars = "★★★★★";
        break;
    }
    return(
        <p>{stars}</p>
    );
}

export default Rating;