function Random(props) {
  let randomNum = Math.floor(Math.random() * props.max);
  return (
    <div>
      <p>{randomNum}</p>
    </div>
  );
}

export default Random;
