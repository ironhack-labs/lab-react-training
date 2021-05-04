function Random(props) {
  const randomNumber =
    props.min + Math.floor(Math.random() * (props.max - props.min));
  const text = `Random value between ${props.min} and ${props.max} => ${randomNumber}`;
  return (
    <div className="random-container">
      <h2>{text}</h2>
    </div>
  );
}

export default Random;
