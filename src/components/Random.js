const Random = (props) => {
  const { min, max } = props;
  const randomValue = Math.floor(Math.random() * max) + min;
  return (
    <div className="random">
      <p>
        Random value between {min} and {max} => {randomValue}
      </p>
    </div>
  );
};

export default Random;
