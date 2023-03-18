function Random(props) {
  const Random = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );
  return (
    <div className="Random">
      <p>
        Random value between {`${props.min} and ${props.max}`}: {Random}
      </p>
    </div>
  );
}
export default Random;
