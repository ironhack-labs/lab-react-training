function Rating({ children }) {
    const rate = Math.round(children);
    const blankStars = 5 - rate;
  
    return <div>{'★'.repeat(rate) + '☆'.repeat(blankStars)}</div>;
  }
  
  export default Rating;