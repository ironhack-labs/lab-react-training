function Random(props) {
  const { min, max } = props;
  const randomNum = Math.random() * (max - min + 1) + min;

  return (
    <div>
      Random value between {min} and {max} => {Math.floor(randomNum)}
    </div>
  );
}

export default Random;
