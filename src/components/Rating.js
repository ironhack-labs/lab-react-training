function Rating(props) {

  let grade = Math.round(props.children);
  let starRating = '★'.repeat(grade) + '☆'.repeat(5 - grade);

  return <p className="rating">{starRating}</p>;
}

// ☆★

export default Rating;
