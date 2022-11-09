export const Random = (props) => {
  const { min, max } = props;

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div>{`Random value between ${min} and ${max} => ${randomNumber}`}</div>
  );
};
