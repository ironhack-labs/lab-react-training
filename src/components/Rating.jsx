function Rating(props) {
  const emptyStar = '☆';
  const filledStar = '★';
  let stars = '';
  let rating = Math.round(props.children);
  for (rating ; stars.length <= 4 ; rating--)
    stars += rating > 0 ? filledStar : emptyStar;
  return (
    <div className="Rating">{stars}</div>
  );
}

export default Rating;

