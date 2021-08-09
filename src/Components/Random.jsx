import '../Styles/Random.css';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Random(props) {
  return (
    <p className="Random">
      Random value between {props.min} and {props.max} =>
      {getRandomInt(props.min, props.max)}
    </p>
  );
}

export default Random;
