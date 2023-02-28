import React from 'react';

function Random(props) {
  const { min, max } = props;
  const Random = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );
  return (
    <div className="Random">
      <p>
        Random value between {min} and {max} = {Random}
      </p>
    </div>
  );
}

export default Random;
