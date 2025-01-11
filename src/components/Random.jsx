function Random({ min, max }) {
    let randomValue = min + Math.floor(Math.random() * (max + 1 - min));
    return (
      <div className="Random">
        <p>
          Random value between {min} and {max} =&gt; {randomValue}
        </p>
      </div>
    );
  }
  
  export default Random;