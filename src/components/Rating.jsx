
function Rating ({children}) {
    let roundedRating = Math.round(children);
    return (
        <div className="Rating">
          <p>{"★".repeat(roundedRating) + "☆".repeat(5 - roundedRating)}</p>
        </div>
      );
    }

export default Rating;