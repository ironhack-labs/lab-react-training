export const Random = ({ min, max }) => {
  let randomNumber = Math.floor(Math.random() * max) + min;

  return (
    <div>
      <h3>
        Random value between {min} and {max} = {randomNumber}
      </h3>
    </div>
  );
};
