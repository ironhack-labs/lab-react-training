//jshint esversion:8

export const Rating = ({children}) => {
    let rating;
    const roundedNum = Math.round(children);
    
    if (roundedNum === 0) {
        rating = "☆☆☆☆☆";
    }
    if (roundedNum === 1) {
        rating = "★☆☆☆☆";
    }
    if (roundedNum === 2) {
        rating = "★★☆☆☆";
    }
    if (roundedNum === 3) {
        rating = "★★★☆☆";
    }
    if (roundedNum === 4) {
        rating = "★★★★☆";
    }
    if (roundedNum === 5) {
        rating = "★★★★★";
    }
    return (
      <div className="Rating">
        {rating}
      </div>
    );
  };