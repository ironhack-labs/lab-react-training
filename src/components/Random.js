function Random(props) {
  const { min, max } = props;

  function randomGenerator(min, max){
    const number = Math.floor(Math.random() * max) + min;
    return number
  }


  return (
    <div>
      <p>
        Random value between {min} and {max} = {'>'} {randomGenerator(min,max)}
      </p>
    </div>
  );
}

export default Random;
