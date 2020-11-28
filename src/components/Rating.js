import React, { Component } from 'react';

class Rating extends Component {

    getStars(rating) {
        const stars = Math.round(rating);
        let starsString = '';

        for (let index = 0; index < 5; index++) {
            if (index < stars) {
                starsString += '★';
            } else {
                starsString += '☆';
            }
        }

        return starsString;
    }

    render({children}=this.props) {

        const stars = this.getStars(children)

        return (
            <div className='ratingCont'>
                <p>{stars}</p>
            </div>
        )

    }

}

export default Rating;