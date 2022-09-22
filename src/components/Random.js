import './Random.css';

function Random(props) {
  const randomizer_max_min = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );

  return (
    <div className="random">
      <p>{`Random value between ${props.min} and ${props.max} => ${randomizer_max_min}`}</p>
    </div>
  );
}
export default Random;
