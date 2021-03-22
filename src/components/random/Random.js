import react from 'react';

function Random(props) {
  let getRandom = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );

  return (
    <div className="Random">
      <p>
        Random value btw {props.min} {props.max} {getRandom}
      </p>
    </div>
  );
}

export default Random;