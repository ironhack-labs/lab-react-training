export const Random = ({ min, max }) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div>
      Random number between {min} and {max}: {randomNumber}
    </div>
  );
};

export default Random;
