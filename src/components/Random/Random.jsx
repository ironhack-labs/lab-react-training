import './Random.css';

function Random({ min, max }) {

  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="random">
      <p>Random value between {min} and {max} = {result}</p>
    </div>
  )
}

Random.defaultProps = {
  min: 0,
  max: 0
}

export default Random