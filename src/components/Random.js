function Random(props) {
  const { min, max } = props;

  return (
    <div className="IdCard">
      <p>
        Random value between {props.min} and {props.max} =&gt;{' '}
        {Math.trunc(Math.random() * (max - min) + min)}
      </p>
    </div>
  );
}

export default Random;
