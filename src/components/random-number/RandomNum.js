import "./RandomNum.css"

function RandomNum({ min, max}) {
  let random = Math.floor(Math.random() * (max - min) + min)
  return(
    <div className="random-num mx-4">
      <h3>{`Random value between ${min} and ${max} => ${random}`}</h3>
    </div>
  )
}

export default RandomNum