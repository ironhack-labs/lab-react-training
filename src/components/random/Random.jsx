import { useEffect, useState } from 'react';
import './random.css';

const Random = ({ min, max }) => {
  const [random, setRandom] = useState(0);

  useEffect(() => {
    const randomNumber = (Math.random() * (max - min) + min).toFixed(0);
    setRandom(randomNumber);
  }, [max, min]);

  return (
    <div className="random-container">
      <h2>
        Random value between {min} and {max} = {random}{' '}
      </h2>
    </div>
  );
};

Random.defaultProps = {
  min: 0,
  max: 10,
};

export default Random;
