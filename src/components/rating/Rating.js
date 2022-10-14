import "./Rating.css"

function Rating({ children }) {
  const star = (Math.round(children))
  // const star1 = (Math.round(children) < 1) ? "-o" : " text-warning"
  // const star2 = (Math.round(children) < 2) ? "-o" : " text-warning"
  // const star3 = (Math.round(children) < 3) ? "-o" : " text-warning"
  // const star4 = (Math.round(children) < 4) ? "-o" : " text-warning"
  // const star5 = (Math.round(children) < 5) ? "-o" : " text-warning"

  return(
    <div className="stars">
      <i className={`star fa fa-star${star < 1 ? "-o" : " text-warning"} fa-lg t`} />
      <i className={`star fa fa-star${star < 2 ? "-o" : " text-warning"} fa-lg t`} />
      <i className={`star fa fa-star${star < 3 ? "-o" : " text-warning"} fa-lg t`} />
      <i className={`star fa fa-star${star < 4 ? "-o" : " text-warning"} fa-lg t`} />
      <i className={`star fa fa-star${star < 5 ? "-o" : " text-warning"} fa-lg t`} />
    </div>
  )
}

export default Rating