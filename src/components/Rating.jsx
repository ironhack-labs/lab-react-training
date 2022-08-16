import React from 'react';

function Rating(props) {
    const { children } = props;
    const stars = [];

    for (let i = 0; i < children; i++) {
        stars.push(<span key={i}>★</span>);
        
    }
    for (let i = children; i < 5; i++) {
        stars.push(<span key={i}>☆</span>);
    }
    return <div>{stars}</div>;
    }

export default Rating;