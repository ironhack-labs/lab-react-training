import React, { Component } from 'react';
import './Rating.css';

class Rating extends Component {
    render() {
        const fullStars = Math.round(this.props.children);
        let stars = '';

        for (let i = 0; i < fullStars; i++) {
            stars += '★';
        }

        for (let i = fullStars; i < 5; i++) {
            stars += '☆';
        }

        return (
            <div className='Rating-stars'>
                {stars}
            </div>
        );
    }
}

export default Rating;