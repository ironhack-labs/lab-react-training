const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

function Random({ min, max }) {
  return (
    <p>
      <strong>
        Random value between {min} and {max}:
      </strong>{' '}
      {getRandomNum(min, max)}
    </p>
  );
}

export default Random;
