import PropTypes from 'prop-types';

function Rating(props) {
    const { children } = props;
    let currentRating;
    
    switch(true) {
        case children < 0.5:
            currentRating = "☆☆☆☆☆";
            break;
        case children > 0.5 && children < 1.5:
            currentRating = "★☆☆☆☆";
            break;
        case children >= 1.5 && children < 2.5:
            currentRating = "★★☆☆☆";
            break;
        case children >= 2.5 && children < 3.5:
            currentRating = "★★★☆☆";
            break;
        case children >= 3.5 && children < 4.5:
            currentRating = "★★★★☆";
            break;
        case children > 4.5:
            currentRating = "★★★★★";
            break;
    }
    
    return (
        <div>
            <p>{currentRating}</p>
        </div>
    );
}

Rating.propTypes = {
    children: PropTypes.number.isRequired
}

export default Rating;