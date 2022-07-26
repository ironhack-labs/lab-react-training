function Random(props) {
  const randNum =
    Math.floor(Math.random() * (props.max - props.min)) + props.min;
  return (
    <div className="random">
      <p>
        Random value between {props.min} and {props.max} = {randNum}{' '}
      </p>
    </div>
  );
}

export default Random;
