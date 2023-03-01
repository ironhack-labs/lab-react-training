import React from 'react'


function Random(props) {
let {min, max} = props
    /* let result =  Math.floor(Math.random() * ({ max } - { min }) + { min }) */
    let result = Math.floor(Math.random() * (max - min ) + min );

  return (
    <div>
      <p>Random value between {min} and {max} = {result}</p>
    </div>
  );
}

export default Random