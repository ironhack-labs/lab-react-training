function Rating({ children }) {
    let ratingRounded = Math.round(children);
    return (
      <div className="Rating">
        <p>{"★".repeat(ratingRounded) + "☆".repeat(5 - ratingRounded)}</p>
      </div>
    );
  }
  
  export default Rating;