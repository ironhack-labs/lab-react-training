function Rating(props) {
  const totalStars = 5;
  const getActiveStars = (num) => {
    return Math.round(num);
  };

  const activeStars = getActiveStars(props.children);

  return (
    <div className="StarsRating">
      {[...new Array(totalStars)].map((arr, index) => {
        return index < activeStars ? (
          <i key={index} className="fas fa-regular fa-star"></i>
        ) : (
          <i key={index} className="far fa-regular fa-star"></i>
        );
      })}
    </div>
  );
}

export default Rating;
