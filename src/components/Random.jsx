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
        <span
          style={{ display: 'block', fontSize: '4rem', fontWeight: 'bold' }}
        >
          {getRandomNum(min, max)}
        </span>
      </p>
    </article>
  );
}

export default Random;
