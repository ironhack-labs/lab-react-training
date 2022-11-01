function Random(props) {
  const randomNumber = Math.floor(
    Math.random() * (props.max - props.min + 1) + props.min
  );
  return (
    <div>{`Random value between ${props.min} and ${props.max} => ${randomNumber}`}</div>
  );
}

export default Random;
