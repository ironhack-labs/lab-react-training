function Random(props) {
    const {min, max} = props;
    
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div>
    <h4>Random value between {min} and {max}: {randomNum}</h4>    
    </div>
  )
}

export default Random