function Random(props) {
  return (
    <div>
      <h1>Random</h1>
      <p>
        Random value between {props.min} and {props.max} =&gt;{' '}
        {Math.floor(Math.random() * (props.max - props.min + 1)) + props.min}
      </p>
    </div>
  );
}

export default Random;
