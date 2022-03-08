function Rating(props) {
  // let rating = '';

  // switch (rating) {
  //   case parseInt(props.children) === 0:
  //     rating = '☆☆☆☆☆';
  //     break;
  //   case Math.round(props.children) === 1:
  //     rating = '★☆☆☆☆';
  //     break;
  //   case Math.round(props.children) === '2':
  //     rating = '★★☆☆☆';
  //     break;
  //   case Math.round(props.children) === 3:
  //     rating = '★★★☆☆';
  //     break;
  //   case Math.round(props.children) === 4:
  //     rating = '★★★★☆';
  //     break;
  //   case Math.round(props.children) === 5:
  //     rating = '★★★★★';
  //     break;
  //   default:
  // }
  //   let arr = ['☆', '☆', '☆', '☆', '☆'];

  //   let newArr = arr.map((currentElement) => {
  //     if (Math.round(props.children) === arr.indexOf(currentElement) + 1) {
  //      (currentElement = '★');
  //     }
  //     return currentElement
  //   }
  //   );

    let grade = '';
    let gradeRounded = Math.round(props.children);
    for (let i = 0; i <= 5; i++) {
      if (i < gradeRounded) {
        grade =+ '★';
      } else {
        grade =+ '☆';
      }
    }
    return <div className="rating">{grade}</div>;

  }
  
  // ☆★

export default Rating;
