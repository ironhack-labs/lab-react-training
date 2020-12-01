import React from 'react';
import './Rating.css';

function Rating({ children }) {
  if (Number(children) >= 0 && children < 1) {
    return <h2>☆☆☆☆☆</h2>;
  }
  if (Number(children) >= 1 && children < 2) {
    return <h2>★☆☆☆☆</h2>;
  }
  if (Number(children) >= 2 && children < 3) {
    return <h2>★★☆☆☆</h2>;
  }
  if (Number(children) >= 3 && children < 4) {
    return <h2>★★★☆☆</h2>;
  }
  if (Number(children) > 4 && children <= 5) {
    return <h2>★★★★★</h2>;
  }
}

export default Rating;
