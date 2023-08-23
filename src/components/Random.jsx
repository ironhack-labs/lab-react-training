function Random(props) {
  const multiply = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );

  return (
    <div>
      <p>{multiply}</p>
    </div>
  );
}

export default Random;
