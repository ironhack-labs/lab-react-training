import "./Random.css"
function Random(props) {
  console.log(props)
  const minimo = props.min
  const maximo = props.max
  return (
    <div className="border">
      <p className="style-font">Random value between {props.min} and {props.max} ➡️ <span className="bold">{Math.floor(Math.random() * (maximo - minimo + 1)) + minimo }</span> </p>
    </div>
  )
}

export default Random