import React from 'react';

const Rating = ({ children }) => {
    const stars = '★★★★★'.slice(0, Math.round(children)).concat('☆☆☆☆☆').slice(0, -Math.round(children))
    
    return (
        <p>{stars}</p>
    );
}

export default Rating;