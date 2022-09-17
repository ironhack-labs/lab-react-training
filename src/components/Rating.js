function Rating(props) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.children) {
      stars.push(<span key={i}>★</span>);
    } else {
      stars.push(<span key={i}>☆</span>);
    }
  }
  return <div>{stars}</div>;
}

export default Rating;
