function Random({ min, max }) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
      <div className="normal-box">
        <p>Random value between {min} and {max} is {randomNumber}</p>
      </div>
    );
  }
  
  export default Random;