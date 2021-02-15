import React from 'react';

function Ratings({children}) {
      const stars = ["☆☆☆☆☆","☆☆☆☆★","☆☆☆★★","☆☆★★★","☆★★★★","★★★★★"]
      const star = Math.round(children)
      const rating = stars[star]
  
    return (
      <div>
       {rating}
      </div>
    );
  }
  

  export default Ratings;