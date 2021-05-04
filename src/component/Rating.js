import React from 'react';

const App = (props) => {
  const rating = Math.round(props.children);
  const fullStar = '★';
  const emptyStart = '☆';
  const allStars = fullStar.repeat(rating) + emptyStart.repeat(5 - rating);
  return <div className="Rating">{allStars}</div>;
};

export default App;
