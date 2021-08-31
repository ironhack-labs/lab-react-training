import React from 'react';
import "./Ratings.css";

export default class Ratings extends React.Component {
    render() {
    const ratings = this.props;
    const rating = Math.round(Number(ratings.children));
    const stars = [];

    for (let i = 0; i < 5; i++) {
        i < rating
        ? stars.push(<span className='fullStar' key={i}>★</span>)
        : stars.push(<span className='emptyStar' key={i}>☆</span>)
    }

    return(
        <div className="ratingStars">{stars}</div>
    );
    }
}