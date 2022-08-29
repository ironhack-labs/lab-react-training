import './Random.css'

function Random({ min, max, className }) {
  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="random">
      <div className="container">
        <div className={`message text-start ${className}`}>
          <span>Random value between {min} and {max} {`=>`} {randomValue}</span>
        </div>
      </div>
    </div>
  );
}

export default Random;