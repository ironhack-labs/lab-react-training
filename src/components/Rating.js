
const Rating = ({ children }) => {
  let star;
  switch (Math.round(children)) {
    case 1:
      star = '★☆☆☆☆';
      break;
    case 2:
      star = '★★☆☆☆';
      break;
    case 3:
      star = '★★★☆☆';
      break;
    case 4:
      star = '★★★★☆';
      break;
    case 5:
      star = '★★★★★';
      break;
    default:
      star = '☆☆☆☆☆';
      break;
  }

  return <div style={{ fontSize: '5rem', lineHeight: '4rem' }}>{star}</div>;
};

export default Rating;
