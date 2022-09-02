function Rating({ children }) {
  const startRating = (children) => {
    switch (Math.round(children)) {
      case 1:
        return '★☆☆☆☆';
      case 2:
        return '★★☆☆☆';
      case 3:
        return '★★★☆☆';
      case 4:
        return '★★★★☆';
      case 5:
        return '★★★★★';
      default:
        return '☆☆☆☆☆';
    }
  };

  return <h2>{startRating(children)}</h2>;
}

export default Rating;
