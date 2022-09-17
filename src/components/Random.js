function Random(props) {
  const { min, max } = props;
  let randomValue = 0;
  return (
    <p>
      Random value between {props.min} and {props.max} is{' '}
      {Math.floor(Math.random() * (max - min + 1) + min)}
    </p>
  );
}

export default Random;
