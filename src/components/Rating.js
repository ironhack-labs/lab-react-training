function Rating({ children }) {
  console.log(children);
  const stars = Math.round(children);
  const emptyStars = 5 - stars;
  return <div>{'★'.repeat(stars) + '☆'.repeat(emptyStars)}</div>;
}

export default Rating;
