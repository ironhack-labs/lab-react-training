import '../Styles/Rating.css';

function Rating(props) {
  const rating = Math.round(Number(props.children));

  const stars = [];
  for (let i = 0; i < 5; i++) {
    i < rating
      ? stars.push(<span key={i}>★</span>)
      : stars.push(<span key={i}>☆</span>);
  }
  return <div className="ratingStars">{stars}</div>;
}

export default Rating;
