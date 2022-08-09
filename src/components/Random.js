import './Greetings.css';

function Random(props) {
  const random = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );
  return (
    <div className="greet">{`Random Value between ${props.min} e ${props.max} is ${random}`}</div>
  );
}

export default Random;