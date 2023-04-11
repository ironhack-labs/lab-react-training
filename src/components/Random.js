function Random({ min, max }) {
  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="random">
      <p>Your random value is {randomValue}</p>
    </div>
  );
}

export default Random;
