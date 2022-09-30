function Random({ min, max }) {
  function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const randomNumber = getRandomNumbers(min, max);

  return (
    <div>
      <p className="Random">
        Random value between {min} and {max} = {randomNumber}
      </p>
    </div>
  );
}
export default Random;
