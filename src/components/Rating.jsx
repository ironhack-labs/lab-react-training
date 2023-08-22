const Rating = ({ children }) => {
    const roundedRating = Math.round(children);
    const maxStars = 5;
  
    const stars = [];
    for (let i = 0; i < maxStars; i++) {
      if (i < roundedRating) {
        stars.push('★'); // Filled star
      } else {
        stars.push('☆'); // Empty star
      }
    }
  
    return <div className="rating">{stars.join('')}</div>;
  };
  
  export default Rating;