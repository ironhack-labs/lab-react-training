const Random = ({ min, max }) => {
  let randomValue = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div>
      Random Value between {min} and {max}: {randomValue}
    </div>
  );
};
export default Random;
