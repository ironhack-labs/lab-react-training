import "./Rating.css"

function Rating(props) {
    const {children} = props;
    const rating = Math.round(children);
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i}>★</span>);
      } else {
        stars.push(<span key={i}>☆</span>);
      }
    }
    
    return (
      <div className="rating">
        {stars}
      </div>
    );
  };
  
  export default Rating;