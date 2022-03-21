import React from 'react';

const Rating = ({ children }) => {

    const stars = Math.round(children)
    const rated = '★'.repeat(stars) + '☆'.repeat(5 - stars);

    return (
        <div>
            <big>{rated}</big>
        </div>
    );
};

export default Rating;
