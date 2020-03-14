import React from "react";
import "./Rating.css";

const Rating = ({ children }) => {
    let number = Math.round(parseFloat(children));
    let total = [];
    let displayStar = () => {
        for(let i = 0; i < 5; i++) {
            if(i < number) {
                total.push('★');
            } else {
                total.push('☆')
            }
        }
        return total.map(ele => ele);
    }

  return (
    <div className="rating-container">
      {displayStar()}
    </div>
  );
};

export default Rating;
