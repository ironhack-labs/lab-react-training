

function Rating(props) {
    const rating = Math.round(props.children); // Round the rating to the nearest whole number
    const filledStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(5 - rating);
  
    return (
      <div>
        <p>
          {filledStars}
          {emptyStars}
        </p>
      </div>
    );
  }
  
  export default Rating;