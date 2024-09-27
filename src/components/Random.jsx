
const Random = ({ min, max }) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return <div>{randomNumber}</div>;
};

export default Random
