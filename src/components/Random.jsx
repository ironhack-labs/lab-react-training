const Random = (props) => {
  let num = Math.floor(Math.random(props.min) * props.max + 1)
  
  return ( 
    <div className="container">
      <p>Random value between {props.min} and {props.max} => {num} </p>
    </div>
  );
}

export default Random;