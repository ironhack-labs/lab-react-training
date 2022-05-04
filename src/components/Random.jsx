function Random(props) {
  const { max, min } = props

  let number = Math.floor(Math.random() * (max - min) + min)

  return ( 
    <div className="random-number">
      <p>Random value between {props.min} and {props.max} => {number}</p>
    </div>)
}

export default Random;