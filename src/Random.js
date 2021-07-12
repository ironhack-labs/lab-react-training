function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function Random(props) {
  return (
    <div>
      <p>
        Random value between {props.min} and {props.max} is =>
        {randomNum(props.min, props.max)}
      </p>
    </div>
  );
}
export default Random;
