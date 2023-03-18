import './random.css';

const Random = ({ min, max }) => {
  const randomNumber = (Math.random() * (max - min) + min).toFixed(0);

  return (
    <div className="random-container">
      <h2>
        Random value between {min} and {max} = {randomNumber}
      </h2>
    </div>
  );
};

Random.defaultProps = {
  min: 0,
  max: 10,
};

export default Random;
