function Rating(props) {
  const { children } = props;
  const rating = Math.round(children);

  let stars = '★'.repeat(rating);

  for (let i = rating; i < 5; i++) {
    stars += '☆';
  }

  return <div style={{ fontSize: '50px' }}>{stars}</div>;
}

export default Rating;
