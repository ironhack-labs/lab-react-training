const Rating = ({ children }) => {

  const allStars = Math.min(Math.round(children), 5);
  const fullStar = '★';
  const emptyStar = '☆';

  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < allStars) {
      stars.push(fullStar);
    } else {
      stars.push(emptyStar);
    }
  }


    return (
        <div className="ratingStars">{stars}</div>
    )
}


export default Rating