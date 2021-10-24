import React from 'react';

function Random(props) {
  const random = Math.floor(
    Math.random() * (props.max - props.min + 1) + props.min
  );
  return (
    <div>
      <p>
        <b>
          Random value between {props.min} and {props.max} = {random}
        </b>        
      </p>
    </div>
  );
}

export default Random;
