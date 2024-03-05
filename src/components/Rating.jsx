function Rating(props) {
  const rating = Math.round(props.children);

  function starConversion(rating) {
    if (rating === 0) {
      return '☆☆☆☆☆';
    } else if (rating === 1) {
      return '★☆☆☆☆';
    } else if (rating === 2) {
      return '★★☆☆☆';
    } else if (rating === 3) {
      return '★★★☆☆';
    } else if (rating === 4) {
      return '★★★★☆';
    } else if (rating === 5) {
      return '★★★★★';
    }
  }

  return (
    <div className="ratings">
      <p>{starConversion(rating)}</p>
    </div>
  );
}

export default Rating;
