import "./Rating.css";

function Rating(props) {
    function displayRating(num) {
        const numRounded = Math.round(num); 
        const stars = "★".repeat(numRounded) + "☆".repeat(5 - numRounded); 
        return <p>{stars}</p>;
      }
  return (
    <div className="ratingDiv">
      <div>
       {displayRating(props.number)}
      </div>
    </div>
  );
}

export default Rating;
