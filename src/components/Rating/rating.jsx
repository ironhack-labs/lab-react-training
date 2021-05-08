import React from 'react';

const rating = (props) => {
  let emptyStars = 5 - Math.round(props.children);

  return (
    <div style={{ margin: '10px' }}>
      {(() => {
        if (emptyStars === 0) {
          return <h1>★ ★ ★ ★ ★</h1>;
        } else if (emptyStars === 1) {
          return <h1>★ ★ ★ ★ ☆</h1>;
        } else if (emptyStars === 2) {
          return <h1>★ ★ ★ ☆ ☆</h1>;
        } else if (emptyStars === 3) {
          return <h1>★ ★ ☆ ☆ ☆</h1>;
        } else if (emptyStars === 4) {
          return <h1>★ ☆ ☆ ☆ ☆</h1>;
        } else {
          return <h1>☆ ☆ ☆ ☆ ☆</h1>;
        }
      })()}
    </div>
  );
};

export default rating;
