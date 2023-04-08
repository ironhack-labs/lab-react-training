import React from 'react';
// import './Rating.css'; // assuming there's a CSS file, commented out for simplicity

const Rating = ({ children }) => {
  const filledStars = Math.round(children); // rounds the children prop to nearest integer
  const emptyStars = 5 - filledStars; // calculates how many empty stars are needed
  return (
    <div className="rating">
      {/* loops over an array with length of filledStars */}
      {[...Array(filledStars)].map((_, i) => (
        // generates a filled star for each iteration with unique key
        <span key={i} className="star filled">★</span>
      ))}
      {/* loops over an array with length of emptyStars */}
      {[...Array(emptyStars)].map((_, i) => (
        // generates an empty star for each iteration with unique key
        <span key={i} className="star empty">☆</span>
      ))}
    </div>
  );
};

export default Rating;

