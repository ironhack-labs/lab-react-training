import React from 'react';


function Random(props) {
    const { min, max } = props;
        let randomNumber = () => { let range = max - min + 1;
        return Math.floor( Math.random() * range ) + min

      } 
      return (
      <div>
      <p> {randomNumber()} </p>
      </div>
      )
}

export default Random;