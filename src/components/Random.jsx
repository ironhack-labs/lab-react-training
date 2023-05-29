function Random(props) {
  return (
    <div>
      <p>
        Random Value between {props.min} and {props.max} =
        {Math.round(Math.random() * (props.max - props.min) + props.min)}{' '}
      </p>
    </div>
  );
}

export default Random;
