function Rating(props) {
  const { children } = props;
  const stars = Math.round(children);
  return (
    <div className="starsRating">
      {stars === 0 && (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Star_rating_0_of_5.png"
          alt="0"
        />
      )}
      {stars === 1 && (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Star_rating_1_of_5.png"
          alt="1"
        />
      )}
      {stars === 2 && (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/95/Star_rating_2_of_5.png"
          alt="2"
        />
      )}
      {stars === 3 && (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Star_rating_3_of_5.png"
          alt="3"
        />
      )}
      {stars === 4 && (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Star_rating_4_of_5.png"
          alt="4"
        />
      )}
      {stars === 5 && (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/Star_rating_5_of_5.png"
          alt="5"
        />
      )}
    </div>
  );
}

export default Rating;
