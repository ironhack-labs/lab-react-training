const Random = ({ min, max }) => {
  return (
    <div className="min-max">
      <p>
        Random value between {min} and {max} is
        {Math.floor(Math.random() * (max - min)) + min}
      </p>
    </div>
  );
};

export default Random;
