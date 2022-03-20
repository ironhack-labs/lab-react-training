import React, {Component} from "react";
import './Rating.css';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.number = Math.round(props.children)
    this.startsRating =  '★'.repeat(this.number) + '☆'.repeat(5 - this.number)

  }
  render() {
    return (
      <div>
        <div className="rating">
        {this.startsRating}
        </div>
      </div>
    )
  }
}

export default Rating;
