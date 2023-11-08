import '../assets/styles/random.css';

function Random(props) {
  return (
    <div className="random">
      Random value between {props.min} and {props.max} =&gt;{' '}
      {Math.floor(Math.random() * (props.max - props.min)) + props.min}
    </div>
  );
}

export default Random;
