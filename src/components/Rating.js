import React from 'react';

function Rating(props) {
  const pourcentage = Math.floor(((props.children / 5) * 100) / 5) * 5;

  return (
    <div className="stars-container">
      <div className="stars-outer">
        <div className="stars-inner" style={{ width: pourcentage }}></div>
      </div>
    </div>
  );
}

export default Rating;