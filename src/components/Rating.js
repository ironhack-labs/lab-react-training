import React from 'react';


const Rating = (props) => {
    let rate = Math.round(props.children)
    let string = "★".repeat(rate) + "☆".repeat(5-rate)
    return (
        <div>
            {string}
        </div>
    )
}

export default Rating