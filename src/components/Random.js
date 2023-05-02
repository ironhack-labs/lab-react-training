function Random(props) {
  const { min, max } = props;
  const randomNumber = Math.round(Math.random() * (max - min) + min);

  return (
    <div>
      <p>
        Random value between {min} and {max} is {randomNumber}
      </p>
    </div>
  );
}

export default Random;
