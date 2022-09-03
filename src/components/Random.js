function Random(props) {
  const Random = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );

  return (
    <div classename="Random">
      Random value between {props.min} and {props.max} ={Random}
    </div>
  );
}

export default Random;
