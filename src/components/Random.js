
export default function Random(props) {
  return(
    <p className="randomnumber">Numero aleatorio entre {props.min} y {props.max}: <strong> { Math.floor( Math.random() * (props.max - props.min) + props.min) } </strong></p> 
  )
}


