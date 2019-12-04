import React from 'react';


function Rating(props) {

    return (
        <p> 
        {
            Math.round(props.children) < 1 
            ? "☆☆☆☆☆"
            : Math.round(props.children) < 2
            ? "★☆☆☆☆"
            : Math.round(props.children) < 3
            ? "★★☆☆☆"
            : Math.round(props.children) < 4
            ? "★★★☆☆"
            : Math.round(props.children) < 5
            ? "★★★★☆"
            : "★★★★★"
        }
        </p>
    )
}

export default Rating;