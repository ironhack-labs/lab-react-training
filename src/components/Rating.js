import React, {Component} from 'react'

class Rating extends Component {
    render() {
        const { star } = this.props;
        const number = Math.round(star);
        const rate = [];

        for (let i=0; i<=5; i++){
            if (i <= number) {
                rate.push("★")
            } else {
                 rate.push("☆")
            }
        }
    
    return(
        <div className="rating">
         {rate} 
       </div>
    )
  }
}


export default Rating;
