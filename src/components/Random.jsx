function getRandomNumber(lowBound, highBound) {
  const rand = Math.floor(Math.random() * (highBound - lowBound) + lowBound);
  return (rand);
}

function Random(props) {
  return (
    <div className="box">Random value between {props.min} and {props.max} => {getRandomNumber(props.min, props.max)}</div>
  );
}

export default Random;