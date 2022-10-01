function Rating({ children }) {
  let emptyStar = '☆';
  let filledStar = '★';
  const rating =
    filledStar.repeat(Math.floor(children)) +
    emptyStar.repeat(5 - Math.floor(children));
  return <div className="rating">{rating}</div>;
}
export default Rating;
