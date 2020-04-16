import React from 'react';

const Rating = props => {

    function getRating(val) {
        val = Math.round(val);
        let fullStars = []
        let emptyStars = []

        for (let i = 0; i < val; i++) {
            fullStars.push('★');
        }

        if (fullStars.length < 5) {
            for (let j = 0; j < 5 - fullStars.length ; j++) {
                emptyStars.push("☆");
            }
        }

        fullStars.push.apply(fullStars, emptyStars);

        return fullStars;
    }

    return (
        <div className="flex text-2xl text-yellow-500">
            {getRating(props.children)}
        </div>
    )
}

export default Rating;