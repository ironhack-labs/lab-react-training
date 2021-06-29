function Rating(props) {
  // let stars = '';
  // let roundedNum = Math.round(props.children);

  // // eslint-disable-next-line default-case
  // switch (roundedNum) {
  //   case 0:
  //     stars = '☆☆☆☆☆';
  //     break;
  //   case 1:
  //     stars = '★☆☆☆☆';
  //     break;
  //   case 2:
  //     stars = '★★☆☆☆';
  //     break;
  //   case 3:
  //     stars = '★★★☆☆';
  //     break;
  //   case 4:
  //     stars = '★★★★☆';
  //     break;
  //   case 5:
  //     stars = '★★★★★';
  //     break;
  // }

  // return stars;

  let number = Math.round(props.children);
  let stars = '';
  for (let i = 0; i < 5; i++) {
      if (i < number) {
          stars += '★';    
      } else {
          stars += '☆';
      }
  }
  return (
      <div>{stars}</div>
  )
}

export default Rating;