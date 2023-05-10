import "./index.css"

export const Rating = ({children}) => {
  const fillStarImg = "★"
  const emptyStarImg = "✰"
  const ratingNumber = Math.round(children)
  const emptyStars = 5 - ratingNumber
  const  ratingWithStars = `${fillStarImg.repeat(ratingNumber)}${emptyStarImg.repeat(emptyStars)}`
  
  return (
    <div className="Rating">
      <p>{ratingWithStars}</p>
    </div>
  )
}
