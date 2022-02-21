import './Rating.css';

function Rating(props) {
  const star = (rate) => {
    if (rate === 0) {
      return '☆☆☆☆☆';
    } else if (rate === 1) {
      return '★☆☆☆☆';
    } else if (rate === 2) {
      return '★★☆☆☆';
    } else if (rate === 3) {
      return '★★★☆☆';
    } else if (rate === 4) {
      return '★★★★☆';
    } else if (rate === 4) {
      return '★★★★★';
    }
  };

  return (
    <article className="rating">
      <p>{star(Math.round(props.children))}</p>
    </article>
  );
}

export default Rating;
