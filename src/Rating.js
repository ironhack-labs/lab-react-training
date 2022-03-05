function Rating(props) {
  let stars = '';
  for (let i = 1; i < 6; i++) {
    if (i <= Math.round(Number(props.children))) {
      stars += '★';
    } else {
      stars += '☆';
    }
  }
  return <div className="rating">{stars}</div>;
}

export default Rating;
