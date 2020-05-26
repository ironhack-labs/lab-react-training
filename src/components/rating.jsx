import React from 'react';

const Rating = (props) => {
  const rating = Math.round(props.children);
  let string = '★'.repeat(rating);
  let stringempty = '☆'.repeat(5 - rating);

  return (
    <div>
      <p>
        {string}
        {stringempty}
      </p>
    </div>
  );
};

export default Rating;
