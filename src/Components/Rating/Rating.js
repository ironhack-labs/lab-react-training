import React from 'react';
import './Rating.css';

function starRating(rating) {
  switch (rating) {
    case 0:
      return '☆☆☆☆☆';

    case 1:
      return '★☆☆☆☆';

    case 2:
      return '★★☆☆☆';

    case 3:
      return '★★★☆☆';

    case 4:
      return '★★★★☆';

    case 5:
      return '★★★★★';
  }
}

const Rating = (props) => {
  return <div className="stars">{starRating(Math.round(props.children))}</div>;
};

export default Rating;
