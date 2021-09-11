import React, { Component } from 'react';
import './Rating.css'

class Rating extends Component {
    render(){
        const {children} = this.props;
        const stars = (idx) => {
            if (children < idx) {
                return '☆';
            } return '★';
        };

        return(
            <div className="starss">
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