import React from 'react';

export default function Rating(props) {
        const fullStar = '★';
        const emptyStar = '☆';
        const rating = Math.round(Number(props.children));

        return (
            <div>{fullStar.repeat(rating)}{emptyStar.repeat(5-rating)}</div>
        )
}