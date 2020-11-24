import React from 'react';

export default function Rating(props) {
  function starRating(Rating) {
    const score = Math.floor(Rating);
    switch (score) {
      case 1:
        return '★★☆☆☆';

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
    <div>
      <p>{starRating(props.children)}</p>
    </div>
  );
}
