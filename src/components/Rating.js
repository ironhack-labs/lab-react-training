function Rating(props) {
  function rate(props) {
    if (props.children < 0.5) {
      return <div className="star">☆☆☆☆☆</div>;
    } else if (props.children >= 0.5 && props.children < 1.5) {
      return <div className="star">★☆☆☆☆</div>;
    } else if (props.children >= 1.5 && props.children < 2.5) {
      return <div className="star">★★☆☆☆</div>;
    } else if (props.children >= 2.5 && props.children < 3.5) {
      return <div className="star">★★★☆☆</div>;
    } else if (props.children >= 3.5 && props.children < 4.5) {
      return <div className="star">★★★★☆</div>;
    } else {
      return <div className="star">★★★★★</div>;
    }
  }
  return <div className="star">{rate(props)}</div>;
}

export default Rating;
