function Random({ min, max }) {
  const randomValue = Math.floor(Math.random() * ( max - min + 1 ) + min );
  return (
    <div className="random">
      <p>
          Random value between {min} and {max}  {` => ${randomValue}`}
      </p>
    </div>
  );
}

export default Random;
