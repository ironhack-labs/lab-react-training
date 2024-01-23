function Rating(props) {
  const getStars = (rating) => {
    let ratingNum = Math.round(Number(rating));
    let starRating = '';
    for (let i = 0; i < ratingNum; i++) {
      starRating += '★';
    }
    for (let i = 0; i < 5 - ratingNum; i++) {
      starRating += '☆';
    }
    return starRating;
  };
  //   console.log(typeof props.children)
  //console.log(getStars('1'));

  return <div>{getStars(props.children)}</div>;
}
export default Rating;
