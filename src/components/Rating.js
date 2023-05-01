function Rating(props) {
    const roundedValue = Math.round(props.children);
    const filledStars = '★'.repeat(roundedValue);
    const emptyStars = '☆'.repeat(5 - roundedValue);
  
    return (
      <div>
        {filledStars + emptyStars}
      </div>
    );
  }
  
  export default Rating;
  