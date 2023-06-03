const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

function Random({ min, max }) {
  return (
    <article>
      <p>
        <strong>
          Random value between {min} and {max}:
        </strong>{' '}
        {getRandomNum(min, max)}
      </p>
    </article>
  );
}

export default Random;
