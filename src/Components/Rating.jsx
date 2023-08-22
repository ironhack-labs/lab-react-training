const Rating = ({ children }) => {
  const childrenRounded = Math.round(children);

  if (childrenRounded === 0) {
    return <p>☆☆☆☆☆</p>;
  } else if (childrenRounded === 1) {
    return <p>★☆☆☆☆</p>;
  } else if (childrenRounded === 2) {
    return <p>★★☆☆☆</p>;
  } else if (childrenRounded === 3) {
    return <p>★★★☆☆</p>;
  } else if (childrenRounded === 4) {
    return <p>★★★★☆</p>;
  } else if (childrenRounded === 5) {
    return <p>★★★★★</p>;
  }
};

export default Rating;
