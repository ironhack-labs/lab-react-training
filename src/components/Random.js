function Random(props) {
  const randomNum =
    Math.floor(Math.random() * (props.max - props.min)) + props.min;
  return (
    <h3 className="border">
      Random value between {props.min} and {props.max} : {randomNum}
    </h3>
  );
}
export default Random;
