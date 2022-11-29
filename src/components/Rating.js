const Rating = props => {
  const fullStar = '★'
  const emptyStar = '☆'

  return (
    <div className="Rating">
      <h2>{fullStar.repeat(Math.round(props.children))}{emptyStar.repeat(5 - Math.round(props.children))}</h2>
    </div>
  )
}

export default Rating;
