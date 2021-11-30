import './Random.styles.css';

const Random = (props) => {
  const { min, max } = props;
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  return (
    <div className="number-container">
      <p>
        Random value between {min} and {max} => {randomNumber(min, max)}
      </p>
    </div>
  );
};

export default Random;
