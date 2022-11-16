
function Random(props) {
    const {min, max} = props
    const randNumber = Math.floor(Math.random() * (max - min) ) + min;
  return (
    <p>A random value between {min} and {max} is {randNumber}</p>
  )
}

export default Random