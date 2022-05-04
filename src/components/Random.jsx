const Random = (props) => {
  const firstRandom = Math.random() * (props.max - props.min) + props.min;
  console.log(firstRandom);
  return (
    <div>
      <p>
        Random value between {props.min} and {props.max} {firstRandom}{' '}
      </p>
    </div>
  );
};

export default Random;
