import React from 'react';

function Rating (props){
    return(
      <div className="rating">
      <p>
        {"★".repeat(Math.round(props.children))}
        {"☆".repeat(5 - Math.round(props.children))}
      </p>
    </div>
    )
}

export default Rating;