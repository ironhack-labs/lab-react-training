import React from 'react';

export default function Rating(props) {
    const rating = Math.round(props.children);
    return (
        <div className="Rating">
            {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </div>
    )
}