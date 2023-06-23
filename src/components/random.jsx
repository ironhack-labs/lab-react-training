
 function Random(props) {
    const{min, max} = props;
    let randomValue = min +  Math.floor((max-min)*Math.random());

  return (
    <p className="random">Random value between {min} and {max} => {randomValue}</p>
  )
}

export default Random;