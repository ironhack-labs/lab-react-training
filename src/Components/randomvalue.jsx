function Random(props) {
    const { min, max } = props; // Destructure the props to get min and max
  
    const randomValue = Math.floor(Math.random() * (max - min + 1) + min);
  
    return (
      <div className="random-number">
        <p>
          Random value between {min} and {max} => {randomValue}
        </p>
      </div>
    );
  }
  
  export default Random;
  
