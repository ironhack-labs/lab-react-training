function Rating({ children }) {
  function stars(children) {
    if (Math.round(children) === 0) {
      return '☆☆☆☆☆';
    } else if (Math.round(children) === 1) {
      return '★☆☆☆☆';
    } else if (Math.round(children) === 2) {
      return '★★☆☆☆';
    } else if (Math.round(children) === 3) {
      return '★★★☆☆';
    } else if (Math.round(children) === 4) {
      return '★★★★☆';
    } else if (Math.round(children) === 5) {
      return '★★★★★';
    }
    return '☆☆☆☆☆';
  }

  return (
    <>
      <h4>{stars(children)}</h4>
    </>
  );
}

export default Rating;
