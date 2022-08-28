import "./Rating.css"

function Rating({ children }) {
  const star1 = (Math.round(children) < 1) ? "-o" : ""
  const star2 = (Math.round(children) < 2) ? "-o" : ""
  const star3 = (Math.round(children) < 3) ? "-o" : ""
  const star4 = (Math.round(children) < 4) ? "-o" : ""
  const star5 = (Math.round(children) < 5) ? "-o" : ""

  return(
    <div className="stars">
      <i className={`star fa fa-star${star1} fa-lg`} />
      <i className={`star fa fa-star${star2} fa-lg`} />
      <i className={`star fa fa-star${star3} fa-lg`} />
      <i className={`star fa fa-star${star4} fa-lg`} />
      <i className={`star fa fa-star${star5} fa-lg`} />
    </div>
  )
}

export default Rating