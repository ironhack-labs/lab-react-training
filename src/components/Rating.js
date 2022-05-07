const Rating = ({ children }) => {
  const displayStar = (star) => {
    let starDisplay = '';

    for (let i = 0; i < 5; i++) {
      i < Math.round(Number(star))
        ? (starDisplay += '★')
        : (starDisplay += '☆');
    }
    return starDisplay;
  };

  return (
    <div>
      {/* <p>Hi</p> */}
      {displayStar(children)}
    </div>
  );
};

export default Rating;
