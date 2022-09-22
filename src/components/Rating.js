function Rating({ children }) {
  const stars = Math.round(children);
  console.log('Number of Stars: ', stars);

  return (
    <div className="starsRating">
      {stars === 0 && (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Star_rating_0_of_5.png"
          alt="0 star"
        />
      )}

      {stars === 1 && (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Star_rating_1_of_5.png"
          alt="1 star"
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
          alt="3 stars"
        />
      )}

      {stars === 4 && (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Star_rating_4_of_5.png"
          alt="4 stars"
        />
      )}

      {stars === 5 && (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/Star_rating_5_of_5.png"
          alt="5 stars"
        />
      )}
    </div>
  );
}

export default Rating;
