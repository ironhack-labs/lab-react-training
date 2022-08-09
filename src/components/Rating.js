function Rating(props) {
  let rating = ' ';

  let propsChildren = parseFloat(props.children);

  if (propsChildren < 1) rating = '☆☆☆☆☆';
  if (propsChildren >= 1 && propsChildren < 2) rating = '★☆☆☆☆';
  if (propsChildren >= 2 && propsChildren < 3) rating = '★★☆☆☆';
  if (propsChildren >= 3 && propsChildren < 4) rating = '★★★☆☆';
  if (propsChildren >= 4 && propsChildren < 5) rating = '★★★★☆';
  if (propsChildren === 5) rating = '★★★★★';

  console.log(propsChildren);

  return <div>{rating}</div>;
}

export default Rating;
