import './Random.css';

const Random = (props) => {
  const { min, max } = props;
  let randomNumber = Math.floor(Math.random() * (max - min) + min);

  return (
    <div className="Random">
      <p>
        Random value between {min} and {max} === <b>{randomNumber}</b>
      </p>
    </div>
  );
};

export default Random;
