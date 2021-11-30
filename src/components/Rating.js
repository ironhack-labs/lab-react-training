function Rating(props) {
  const { children } = props;
  let ratingSimple = '';
  if (children < 0.5) {
    ratingSimple = '☆☆☆☆☆';
  } else if (children === 0.5 || children < 1.5) {
    ratingSimple = '★☆☆☆☆';
  } else if (children === 1.5 || children < 2.5) {
    ratingSimple = '★★☆☆☆';
  } else if (children === 2.5 || children < 3.5) {
    ratingSimple = '★★★☆☆';
  } else if (children === 3.5 || children < 4.5) {
    ratingSimple = '★★★★☆';
  } else {
    ratingSimple = '★★★★★';
  }
  return <div className="rating">{ratingSimple}</div>;
}
export default Rating;
