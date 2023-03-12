function Random({ min, max }) {
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div>
      <div className="card fs-4 w-25 border border-3 border-dark m-3 p-3">
        <p>
          Random value between {min} and {max}{' '}
          <i className={`fa fa-arrow-right m-1`} /> {getRandom(min, max)}
        </p>
      </div>
    </div>
  );
}

export default Random;
