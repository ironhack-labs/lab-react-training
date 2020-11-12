import React from 'react';

function Rating(props) {
  function stars(num) {
    switch (num) {
      case 1:
        return '★☆☆☆☆';
        break;
      case 2:
        return '★★☆☆☆';
        break;
      case 3:
        return '★★★☆☆';
        break;
      case 4:
        return '★★★★☆';
        break;
      case 5:
        return '★★★★★';
        break;
      default:
        return '☆☆☆☆☆';
        break;
    }
  }
  return (
    <div style={{ fontSize: '2em' }}>{stars(Math.round(props.children))}</div>
  );
}

export default Rating;
