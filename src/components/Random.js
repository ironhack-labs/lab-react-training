function Random({ min, max }) {
  return (
    <div className="random">
      {`Random value between ${min} and ${max} =>
        ${Math.floor(Math.random() * (max - min) + min)}`}
    </div>
  );
}
export default Random;
