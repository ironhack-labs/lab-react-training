import './Random.css';
function Random(props) {
    const { min, max } = props;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return (
      <div className="random">
        <p>Random value between {min} and {max} issss {randomNumber}</p>
      </div>
    );
  }
  
  export default Random;