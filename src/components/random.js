function Random(props) {
  let value =
    Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
  return (
    <div style={{ border: 'solid' }}>
      {`Random value between ${props.min} and ${props.max} => ${value}`}
    </div>
  );
}
export default Random;
