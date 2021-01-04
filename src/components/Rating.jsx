import React from 'react';

const Rating = (props) => {
  if (props.children >= 0 && props.children < 0.5) {
    return (
      <div>
        <p>☆☆☆☆☆</p>
      </div>
    );
  } else if (props.children >= 0.5 && props.children < 1.5) {
    return (
      <div>
        <p>★☆☆☆☆</p>
      </div>
    );
  } else if (props.children >= 1.5 && props.children < 2.5) {
    return (
      <div>
        <p>★★☆☆☆</p>
      </div>
    );
  } else if (props.children >= 2.5 && props.children < 3.5) {
    return (
      <div>
        <p>★★★☆☆</p>
      </div>
    );
  } else if (props.children >= 3.5 && props.children < 4.5) {
    return (
      <div>
        <p>★★★★☆</p>
      </div>
    );
  } else if (props.children >= 4.5 && props.children <= 5) {
    return (
      <div>
        <p>★★★★★</p>
      </div>
    );
  } else {
    return null;
  }
};

export default Rating;
