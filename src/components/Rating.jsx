function Rating({ children }){
  // Ensure the value is between 0 and 5
  const rating = Math.min(5, Math.max(0, Math.round(children)));

  // Create an array to represent the stars
  const stars = Array.from({ length: 5 }, (_, index) => {
    // Determine whether each star should be filled or empty
    const isFilled = index < rating;
    return isFilled ? '★' : '☆';
  });

  return (
    <div className="Rating">
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default Rating;