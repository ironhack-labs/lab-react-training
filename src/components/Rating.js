const Rating = (props) => {
  let rating = Math.round(props.children);
  if (rating === 0) {
    return <p>&#9734;&#9734;&#9734;&#9734;&#9734;</p>;
  } else if (rating === 1) {
    return <p>&#9733;&#9734;&#9734;&#9734;&#9734;</p>;
  } else if (rating === 2) {
    return <p>&#9733;&#9733;&#9734;&#9734;&#9734;</p>;
  } else if (rating === 3) {
    return <p>&#9733;&#9733;&#9733;&#9734;&#9734;</p>;
  } else if (rating === 4) {
    return <p>&#9733;&#9733;&#9733;&#9733;&#9734;</p>;
  } else if (rating === 5) {
    return <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>;
  }
};

export default Rating;
