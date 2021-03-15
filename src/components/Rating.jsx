import React from 'react';
import "./../styles/Rating.css";

const blackS = "&#9733;";
const whiteS = "&#9734;";

function rating(mark){
if (mark < 1) {
    return `${whiteS}${whiteS}${whiteS}${whiteS}${whiteS}`;
} else if (mark < 2) {
    return `${blackS}${whiteS}${whiteS}${whiteS}${whiteS}`;
} else if (mark < 3) {
    return `${blackS}${blackS}${whiteS}${whiteS}${whiteS}`;
} else if (mark < 4) {
    return `${blackS}${blackS}${blackS}${whiteS}${whiteS}`;
} else if (mark < 5) {
    return `${blackS}${blackS}${blackS}${blackS}${whiteS}`;
} else {
    return `${blackS}${blackS}${blackS}${blackS}${blackS}`;
}
}

function Rating(props) {
    return (
        <div>
           <p> {rating(props.children)}</p>
        </div>
    )
}

export default Rating