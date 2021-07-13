import React from 'react';
import PropTypes from 'prop-types';

function Rating({children}){

    let starsNumb = Math.round(children);
    let stars = "";
    
    if (starsNumb < 1) {
        stars = "☆☆☆☆☆"
    } else if (starsNumb < 2) {
        stars = "★☆☆☆☆"
    } else if (starsNumb < 3) {
        stars = "★★☆☆☆"
    } else if (starsNumb < 4) {
        stars = "★★★☆☆"
    } else if (starsNumb < 5) {
        stars = "★★★★☆"
    } else if (starsNumb === 5) {
        stars = "★★★★★"
    }
    return (
        <div className="ratingSt">
            <strong>{stars}</strong>
        </div>
    )
};


Rating.propTypes = {
  children: PropTypes.number
};
export default Rating;