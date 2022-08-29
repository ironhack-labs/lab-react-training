import './Rating.css';

function Rating({ fontRating, children }) {
  const stars = Math.round(children);
  return (
    <div className="rating">
      <i className={`fa fa-star${stars < 1 ? '-o' : ''}`} style={{
        fontSize: `${fontRating}em`
      }}></i>
      <i className={`fa fa-star${stars < 2 ? '-o' : ''}`} style={{
        fontSize: `${fontRating}em`
      }}></i>
      <i className={`fa fa-star${stars < 3 ? '-o' : ''}`} style={{
        fontSize: `${fontRating}em`
      }}></i>
      <i className={`fa fa-star${stars < 4 ? '-o' : ''}`} style={{
        fontSize: `${fontRating}em`
      }}></i>
      <i className={`fa fa-star${stars < 5 ? '-o' : ''}`} style={{
        fontSize: `${fontRating}em`
      }}></i>      
    </div>
  );
}

Rating.defaultProps = {
  fontRating: 3
}

export default Rating;