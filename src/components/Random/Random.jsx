/* eslint-disable react/prop-types */
const Random = ({ min, max }) => {
  const numb = Math.floor(Math.random(min, max) * max - min + 1);
  return <div>{`Random value between ${min} and ${max} => ${numb + 1}`}</div>;
};

export default Random;
