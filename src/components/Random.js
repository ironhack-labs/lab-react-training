import React from 'react';

function Random(props) {
 
    let random =Math.floor(Math.random()* props.max )
    return (
      
          <div>
              <p>Random number bertween {props.min} and {props.max} is {random} </p>
          </div>  
            
 );
}

export default Random;