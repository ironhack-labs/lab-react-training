import React from 'react';

const Rating = ({ children }) => {
  const roundedChildren = Math.round(children);

  return (
    <div className="m-2" style={{ fontSize: '2rem' }}>
      {roundedChildren > 0
        ? '★★★★★'.slice(-roundedChildren).concat('☆☆☆☆☆'.slice(roundedChildren))
        : '☆☆☆☆☆'}
    </div>
  );
};

export default Rating;
