function Rating({ children }) {
  let num = Math.round(children);

  if (num === 1) {
    children = '★☆☆☆☆';
  } else if (num === 2) {
    children = '★★☆☆☆';
  } else if (num === 3) {
    children = '★★★☆☆';
  } else if (num === 4) {
    children = '★★★★☆';
  } else if (num === 5) {
    children = '★★★★★';
  } else {
    children = '☆☆☆☆☆';
  }

  return <div className="rating">{children}</div>;
}

export default Rating;
