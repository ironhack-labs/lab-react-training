import React from 'react';
import './rating.css';

class Rating extends React.Component {
    generateString = (no) => {
      let star = '\u2606';
      let filledStar = '\u2605';
      this.arr = [];
      for(let i=0; i< 5; i++) {
          if(i < no) {
              this.arr.push(filledStar);
          } else {
              this.arr.push(star);
          }
      }
      let res = this.arr.join(' ');
      return res;
    }
    render() {
        let rating = Math.round(Number(this.props.rate));
         this.ratingStar = this.generateString(rating);
        return (
            <div className="ratings">
             <p>{this.ratingStar}</p>
            </div>
        )
    }
}
export default Rating;