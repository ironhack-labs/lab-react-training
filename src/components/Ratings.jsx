import './Rating.css';

function Ratings({ children }) {
  function stars() {
    if (children < 0.5) return '☆☆☆☆☆';
    else if (children < 1.5) return '★☆☆☆☆';
    else if (children < 2.5) return '★★☆☆☆';
    else if (children < 3.5) return '★★★☆☆';
    else if (children < 4.5) return '★★★★☆';
    else if (children < 5.5) return '★★★★★';
  }

  return (
    <div className="rating">
      <p> {stars(children)}</p>
    </div>
  );
}

export default Ratings;
