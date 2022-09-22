import './Rating.css';

const Rating = (props) => {
  const numRating = Math.ceil(props.children);

  const rating = () => {
    switch (numRating) {
      case 5:
        return '★★★★★';
      case 4:
        return '★★★★☆';
      case 3:
        return '★★★☆☆';
      case 2:
        return '★★☆☆☆';
      case 1:
        return '★☆☆☆☆';
      default:
        return '☆☆☆☆☆';
    }
  };

  /* 
  OTRA OPCIÓN (black y white son variables con las estrellas)
  function showStars(num) {
    const sobra = 5 - num;
    return black.repeat(num) + white.repeat(sobra);
  } */

  return (
    <div className='Rating-container'>
      <div> {rating()}</div>
    </div>
  );
};

export default Rating;
