function Rating({ children }) {

    const roundedRating = Math.round(children);
  
    const stars = Array.from({ length: 5 }, (_, index) => {
      if (index < roundedRating) {
        return '★';
      } else {
        return '☆';
      }
    });
  
    return <div>{stars.join('')}</div>;
  }
  
  export default Rating;