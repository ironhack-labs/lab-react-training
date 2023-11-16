function Rating(props) {
  const rating = props.children;
  if (rating <= 0.8) {
    return <p>☆☆☆☆☆</p>;
  } else if (rating <= 1.8) {
    return <p>★☆☆☆☆</p>;
  } else if (rating <= 2.8) {
    return <p>★★☆☆☆</p>;
  } else if (rating <= 3.8) {
    return <p>★★★☆☆</p>;
  } else if (rating <= 4.8) {
    return <p>★★★★☆</p>;
  } else {
    return <p>★★★★★</p>;
  }

  return (
    <div className="Rating">
      <p>{rating}</p>
    </div>
  );
}

export default Rating;
