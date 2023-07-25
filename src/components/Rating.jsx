const Rating = (props) => {
    const blackStars = Math.round(props.children);
    console.log('props.children =', blackStars);
    const starsArr = [];
    for (let i = 1; i <= 5; i++) {
      if (blackStars >= i) {
        starsArr.push('★');
      } else {
        starsArr.push('☆');
      }
    }
    return (
      <div className="rating">
        {starsArr.map((el) => {
          return <p>{el}</p>;
        })}
      </div>
    );
  }

export default Rating;