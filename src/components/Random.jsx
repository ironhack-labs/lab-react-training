function Random(props) {
  const result =  Math.floor(Math.random() * (props.max - props.min) + props.min);
  return (
    <div className="langdiv">
      <p>Random value between {props.min} and {props.max} is {result}</p>
    </div>
  )
}

export default Random