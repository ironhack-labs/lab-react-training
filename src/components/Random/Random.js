import "./Random.css"
const Random = (props) => {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const { max, min } = props;

  return (
    <div className="random-container">
      <p>
        Random value between{min} and {max} => {getRndInteger(min, max)}
      </p>
    </div>
  );
};
export default Random;
