import React from 'react';

const Rating = ({ children: rating }) => {
  console.log('rating', rating);
  let stars = ['☆', '☆', '☆', '☆', '☆'];
  const renderRating = (rating) => {
    for (let i = 0; i < rating; i++) {
      stars[i] = '★';
    }
    return stars.join('');
  };
  return <p className="rating">{renderRating(Math.round(rating))}</p>;
};

export default Rating;
