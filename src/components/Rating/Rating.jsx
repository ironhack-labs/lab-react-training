function Rating(props) {
  const { children } = props;
  const rounded = Math.round(children);
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rounded) {
      stars.push('★');
    } else {
      stars.push('☆');
    }
  }
  return (
    <div>
      <p>{stars}</p>
    </div>
  );
}

export default Rating;
