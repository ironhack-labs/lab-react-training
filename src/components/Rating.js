import React from 'react'

const Rating = (props) => {
    const rounded = Math.round(props.children);

    const stars = [];

      for (let i = 0; i < rounded; i++) {
        stars.push(<span className="stars">★</span>);
      }

      for (let i = rounded; i < 5; i++) {
        stars.push(<span className="stars">☆</span>);
      }

    return (
        <div className="rating">
            {stars}
        </div>
    )
}

export default Rating
