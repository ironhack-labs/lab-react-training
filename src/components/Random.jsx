import getRandomNumber from '../utils.js';

function Random(props) {
  return (
    <div className="box">Random value between {props.min} and {props.max} => {getRandomNumber(props.min, props.max)}</div>
  );
}

export default Random;