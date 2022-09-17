function Random(props) {
  const { min, max } = props;
  const range = max - min;
  const randomNumber = Math.floor(Math.random() * range + min);
  return <h1>{randomNumber}</h1>;
}

export default Random;
