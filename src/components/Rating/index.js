function Rating(props) {
  const wholeNumber = Math.floor(Math.round(props.children));
  switch (wholeNumber) {
    case 1:
      return <p>★☆☆☆☆</p>;

    case 2:
      return <p>★★☆☆☆</p>;

    case 3:
      return <p>★★★☆☆</p>;

    case 4:
      return <p>★★★★☆</p>;

    case 5:
      return <p>★★★★★</p>;

    default:
      return <p>☆☆☆☆☆</p>;
  }
}

export default Rating;
