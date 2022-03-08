function Rating(props) {
  // let rating = '';
  // let ratingRound = Math.round(props.children);

  // switch (ratingRound) {
  //   case 0:
  //     rating = '☆☆☆☆☆';
  //     break;
  //   case 1:
  //     rating = '★☆☆☆☆';
  //     break;
  //   case 2:
  //     rating = '★★☆☆☆';
  //     break;
  //   case 3:
  //     rating = '★★★☆☆';
  //     break;
  //   case 4:
  //     rating = '★★★★☆';
  //     break;
  //   case 5:
  //     rating = '★★★★★';
  //     break;
  //   default:
  // }
  // let arr = ['☆', '☆', '☆', '☆', '☆'];

  // let newArr = arr.map((currentElement) => {
  //   if (Math.round(props.children) === arr.indexOf(currentElement) + 1) {
  //     currentElement = '★';
  //   }
  //   return currentElement;
  // });

  let grade = '';
  let gradeRounded = Math.round(props.children);
  for (let i = 0; i <= 5; i++) {
    if (i < gradeRounded) {
      grade += '★';
    } else {
      grade += '☆';
    }
  }

  // let grade = Math.round(props.children);
  // let starRating = '★'.repeat(grade) + '☆'.repeat(5 - grade);

  return <p className="rating">{grade}</p>;
}

// ☆★

export default Rating;
