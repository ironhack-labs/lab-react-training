import React from 'react'

function Rating(props) {
  const {children, } = props;
  let stars = Math.round(children)
  let emptyStar = '☆'.repeat([5-stars])
  let fullStar = '★'.repeat([stars])

  let theStars = emptyStar + fullStar
  return (
    <div className="Rating">
      {theStars}
    </div>
  )
}

export default Rating
