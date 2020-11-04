import React from 'react';
import './Rating.css';

const Rating = ({children}) => {

    const setRate = (children) => {
        if((parseFloat(children)) < 0.5) {
            return 0;
        }
        if((parseFloat(children)) < 1.5) {
            return 1;
        }
        if((parseFloat(children)) < 2.5) {
            return 2;
        }
        if((parseFloat(children)) < 3.5) {
            return 3;
        }
        if((parseFloat(children)) < 4.5) {
            return 4;
        }
        else {
            return 5;
        }
    }

    return(
        <div>
            {setRate(children)}
        </div>
    );
}

export default Rating;