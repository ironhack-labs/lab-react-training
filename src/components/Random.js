function Random(props) {
  const min = props.min;
  const max = props.max;
  let randomNum = Math.floor(Math.random() * max) + min;
  return (
    <div className="border">
      <p>Random value between {min} and {max} => {randomNum}</p>
    </div>
  );
}

export default Random;
