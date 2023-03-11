import './Random.css';

const Random = ({ min, max }) => {
    const randomValue = Math.floor(
      (Math.random() * (max - min)) + min
    );
  
    return (
      <div className="Random border-box">
        Random value between {min} and {max} =&gt; {randomValue}
      </div>
    )
  }
  
  export default Random