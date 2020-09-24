import React from 'react';
import './Rating.css';

export default function Rating(props) {
    let emptyStar = '☆';
    let star = '★';
    const rand = Math.round(props.children)

    return (
        <div className="rating-container">
            {star.repeat(rand)}{emptyStar.repeat(5-rand)}
        </div>
    )
}