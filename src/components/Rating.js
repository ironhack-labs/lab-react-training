import React from 'react';

function Rating ({children}) {
  function star (children) {
    if (Math.round(children) === 0) {
      return '☆☆☆☆☆';
    } else if (Math.round(children) === 1) {
      return '★☆☆☆☆';
    } else if (Math.round(children) === 2) {
      return '★★☆☆☆';
    } else if (Math.round(children) === 3) {
      return '★★★☆☆';
    } else if (Math.round(children) === 4) {
      return '★★★★☆';
    } else if (Math.round(children) === 5) {
      return '★★★★★';
    }
  }
  return <div>{star(children)}</div>;
}

export default Rating;
