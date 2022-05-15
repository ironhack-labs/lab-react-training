function Rating(props) {
  function rating(rating) {
    const newRating = Math.round(rating);

    switch (newRating) {
      case 1:
        return <p>★☆☆☆☆</p>
        break;
      case 2:
        return <p>★★☆☆☆</p>
        break;
      case 3:
        return <p>★★★☆☆</p>
        break;
      case 4:
        return <p>★★★★☆</p>
        break;
      case 5:
        return <p>★★★★★</p>
      default:
        return <p>☆☆☆☆☆</p>
    }
  }

  return <div>{rating(props.children)}</div>;
}

export default Rating;
