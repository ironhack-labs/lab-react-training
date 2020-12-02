import React from 'react';
import './Rating.css';

function Rating(props) {
  function stars(rate) {
    switch (rate) {
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

      default:
        return '☆☆☆☆☆';
    }
  }

  return (
    <div className="Rating">
      <p>{stars(Math.round(props.children))}</p>
    </div>
  );
}

export default Rating;
