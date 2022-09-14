import './Greetings.css';

function Random(props) {
  const random = Math.floor(
    Math.random() * (props.max - props.min +1) + props.min
  );
  return (
    <div className="greet">{`Random Value between ${props.min} and ${props.max} is ${random}`}</div>
  );
}

export default Random;