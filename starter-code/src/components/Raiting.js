import React from 'react';
import { Rating } from "../styles/components";

function RatingComponent (props) {
    let rate = props.children;
    let message = '';

    if(rate < 1) {
        message = '0';
    } else if ( rate > .9 && rate < 1.5){
        message = '⭐️';
    } else if( rate >= 1.5 && rate < 2) {
        message = '⭐️⭐️' ;
    } else if( rate >= 2 && rate < 3) {
        message = '⭐️ ⭐️';
    } else if( rate >= 3 && rate < 4) {
        message = '⭐️ ⭐️ ⭐️';
    } else if (rate >= 4 && rate < 4.5) {
        message = '⭐️ ⭐️ ⭐️ ⭐️';
    } else if (rate >= 4.5){
        message = '⭐️ ⭐️ ⭐️ ⭐️ ⭐️';
    }

    return(
        <Rating>
            <p>{message}</p>
        </Rating>
    );
};

export default RatingComponent;