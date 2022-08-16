
function Rating(props) {
  const { children } = props;


  const roundedRating = Math.round(children);
  let starRatings = [];
  for (let i = 0; i < 5; i++) {
    if (i < roundedRating) {
      starRatings.push("★")
    } else {
      starRatings.push("☆")
    }
  }


  return (
    <div>
      <p>{starRatings}</p>
    </div>
  );
}

export default Rating