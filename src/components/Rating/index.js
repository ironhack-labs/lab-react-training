import './index.css';
import React from 'react';

function Rating({ children }) {
    let totalStars = Math.round(children);

    const rating = `${'★'.repeat(totalStars)}${'☆'.repeat(5 - totalStars)}`;

    return <div className="Rating">{rating}</div>;
}

export default Rating;