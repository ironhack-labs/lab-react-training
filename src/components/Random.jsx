function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Random(props) {
  // console.log(props);
  return (
    <div className="RandomValue">
      <p>
        Random value between {props.min} and {props.max} ={' '}
        {getRandomInt(props.min, props.max)}
      </p>
    </div>
  );
}

export default Random;
