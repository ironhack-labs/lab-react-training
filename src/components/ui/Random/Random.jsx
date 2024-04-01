import './Random.css'

function Random({ min, max }) {
  const randomNum = Math.floor(Math.random(min) * max);
  return (
    <p className="random-p">Random value between {min} and {max} = {randomNum}</p>
  );
}

export default Random;