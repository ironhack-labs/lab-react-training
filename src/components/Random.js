const Random = ({ min, max }) => {
  let randomNumber = Math.floor(Math.random() * max - min) +1 + min;

  return (
    <div className="card">
      <span>
        Tandom value between {min} and {max} => {randomNumber}
      </span>
    </div>
  );
};

export default Random;
