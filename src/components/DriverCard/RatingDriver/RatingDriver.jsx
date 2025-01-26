
import './RatingDriver.css'

function RatingDriver(props) {
    function displayRating(num) {
        const numRounded = Math.round(num); 
        const stars = "★".repeat(numRounded) + "☆".repeat(5 - numRounded); // Create stars dynamically
        return <p>{stars}</p>;
      }
  return (
    
      <div className='rating-driver'>
       {displayRating(props.number)}
      </div>
    
  );
}

export default RatingDriver;
