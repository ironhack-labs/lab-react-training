import React from 'react';

function Rating(props) {
  const { children } = props;

  return (
    <div>
      {Math.floor(children)}
      {children < 1 && children >= 0 && <h2>☆☆☆☆☆</h2>}
      {children === 1 && <h2>★☆☆☆☆</h2>}

      {children < 2 && children >= 1 && <h2>★☆☆☆☆</h2>}
      {children === 2 && <h2>★★☆☆☆</h2>}

      {children < 3 && children >= 2 && <h2>★★☆☆☆</h2>}
      {children === 3 && <h2>★★★☆☆</h2>}

      {children < 4 && children >= 3 && <h2>★★★☆☆</h2>}
      {children === 4 && <h2>★★★★☆</h2>}

      {children < 5 && children >= 4 && <h2>★★★★☆</h2>}
      {children >= 5 && <h2>★★★★★</h2>}
    </div>
  );
}

export default Rating;
