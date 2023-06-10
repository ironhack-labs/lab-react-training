export default function Random(props) {
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  return (
    <div className="random box">
      Random value between {props.min} and {props.max} is
      {randomNumber(props.min, props.max)}
    </div>
  );
}
