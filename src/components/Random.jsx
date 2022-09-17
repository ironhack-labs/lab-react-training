function Random(props) {
  function getRandomNum(maxNum) {
    return Math.floor(Math.random() * maxNum);
  }
  return (
    <div className="random">
      <div className="row mx-1 my-2">
        <div className="col">
          <div className="card border-dark">
            <div className="card-body text-start">
              <h4 className="card-text">
                Random value between 1 and {props.max} ➡{' '}
                {getRandomNum(props.max)}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Random;
