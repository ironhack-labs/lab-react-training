function Random(props) {
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="BasicCard">
      <p>
        Random value between {props.min} and {props.max} =
         {getRandomNumber(props.min, props.max)}
      </p>
    </div>
  );
}

export default Random;
