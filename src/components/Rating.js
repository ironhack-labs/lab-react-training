const Rating = (props) => {
  function getRoundNumber(num) {
    return Math.round(num);
  }
  const fillStars = getRoundNumber(props.children);
  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < fillStars) {
      stars = stars + '★';
    } else {
      stars = stars + '☆';
    }
  }

  return <div className="card-container">
    <span>{stars}</span>
  </div>;


};

export default Rating;
