import React from 'react';

function Rating(props) {
    function stars(Rating) {
      const score = Math.floor(Rating);
      switch (score) {
        case 1:
          return '★★☆☆☆';
  
        case 2:
          return '★★☆☆☆';
  
        case 3:
          return '★★★☆☆';
  
        case 4:
          return '★★★★☆';
  
        case 5:
          return '★★★★★';
  
        default:
          return '☆☆☆☆☆';
      }
    }
  
    return (
      <div className="ratings">
        <p>{stars(props.children)}</p>
      </div>
    );
  }
  
  export default Rating;