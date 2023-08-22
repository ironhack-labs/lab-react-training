function Rating(props) {
  const { children } = props;

  function stars() {
    if (children < '0.5') {
      return '☆☆☆☆☆';
    } else if (children >= '0.5' && children < '1.5') {
      return '★☆☆☆☆';
    } else if (children >= '1.5' && children < '2.5') {
      return '★★☆☆☆';
    } else if (children >= '2.5' && children < '3.5') {
      return '★★★☆☆';
    } else if (children >= '3.5' && children < '4.5') {
      return '★★★★☆';
    } else {
      return '★★★★★';
    }
  }

  return (
    <div>
      <p>{stars()}</p>
    </div>
  );
}
export default Rating;
