import React from 'react';
import './Ratings.css';

class Ratings extends React.Component {

    rating () {
        let finalNumber = Math.round(this.props.children) 
        for(let i = finalNumber; i<6; i++){
            return "★".repeat(i) + "☆".repeat(5-i)
        }

       
    }

  render() {
    return <div className="rating">{this.rating()}</div>;
  }
}
export default Ratings;
