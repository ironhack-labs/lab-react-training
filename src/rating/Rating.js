import React, {Component} from 'react';
import './Rating.css';

class Rating extends Component {
    render () {
        let roundedNum = Math.round(this.props.children)
        
        let stars = (rating) => {
            if (roundedNum < rating) {
                return '☆'
            } else {
                return '★'
            }
        }

        return (
            <div className="rating">
                {stars(1)}
                {stars(2)}
                {stars(3)}
                {stars(4)}
                {stars(5)}
            </div>
        )
    }
}

export default Rating;