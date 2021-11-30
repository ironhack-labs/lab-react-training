const Random = (props) => {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const { max, min } = props;

  return (
    <div className="card-container">
      <p>
        Random value between{min} and {max}=> {getRndInteger(min, max)}
      </p>
    </div>
  );
};
export default Random;
