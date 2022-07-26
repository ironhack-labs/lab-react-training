import React from 'react';

function Star(props) {
    let starScore = props.star
    let imgUrl
    if(starScore<1){ imgUrl ="src/assets/emptyStar.png"}
    

    return (
        
  <div className='raitingDiv'>
      <img src= alt="stars"/>
  </div>
 );
}

export default Star;