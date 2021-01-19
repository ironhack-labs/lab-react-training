import React from 'react'
import '../components/Rating.css'


class Rating extends React.Component {
    render() {
        let stars = () => {
            let starsArray = [];
            let num = Math.round(this.props.children);
    

            for (let i = 1; i<=5; i++) {
                if (i <=num ) {
                    starsArray.push('★');
                } else {
                    starsArray.push('☆');
                }
            }

            return starsArray;
        }
        
        return(
            <div className="RatingContainer">
                {stars()}
            </div>
        );
    }
}

// ☆
// 



export default Rating;