function Random(props) {
  return (
    <div>
      <p className="m-0">{`Random value between ${props.min} and ${props.max} => ${Math.floor(
        Math.random() * (props.max - props.min) + props.min
      )}`}</p>
    </div>
  );
}

export default Random;
