import "./Rating.css"

function Rating({children}) {
  const numberStar = Math.round(children)
  console.log(numberStar)
  const stars = []
  for (let i = 0; i <= 4; i++) {
    if (i < numberStar) {
      stars.push(<span key={i}>★</span>)
    } else {
      stars.push(<span key={i}>☆</span>)
    }
  }
  return (
    <div className="span-rating">
      {stars}
    </div>
  )
}

export default Rating
