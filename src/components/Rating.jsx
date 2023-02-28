import React from 'react';

export default function Rating(props) {
  const { children } = props;

  function ratin(ratin) {
    if (ratin <= 0) {
      return '☆☆☆☆☆';
    } else if (ratin <= 1.49 && ratin > 0) {
      return '★☆☆☆☆';
    } else if (ratin >= 1.49 && ratin <= 2.49) {
      return '★★☆☆☆';
    } else if (ratin >= 2.49 && ratin < 3.49) {
      return '★★★☆☆';
    } else if (ratin >= 3.49 && ratin <= 4.49) {
      return '★★★★☆';
    } else if (ratin > 4.49) {
      return '★★★★★';
    }
  }
  
  return (
    <div>
      <h6>
        {ratin(children)} {props.children}
      </h6>
    </div>
  );
}
