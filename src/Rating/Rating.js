import React from 'react';

function Rating(props) {
  function star(Rating) {
    let calc = Math.floor(Rating);
    switch (calc) {
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
      <p>{star(props.children)}</p>
    </div>
  );
}

export default Rating;
