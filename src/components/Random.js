const Random = (props) => {
  const { min, max } = props;
  return (
    //prettier-ignore
    <p className="random-number">
      Random value between {min} and {max} => {Math.floor(Math.random() * max + min)}
    </p>
  );
};

export default Random;
