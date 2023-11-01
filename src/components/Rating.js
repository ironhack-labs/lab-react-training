function Rating(props) {
  const { children } = props;
  const roundedRating = Math.round(children);
  const stars = '★'.repeat(roundedRating) + '☆'.repeat(5 - roundedRating);
  return (
    <div className="rating">
      {stars}
    </div>
  );
}

export default Rating;