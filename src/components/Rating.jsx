import { PropTypes } from "prop-types";

function Rating({ rating }) {

    const roundedRating = Math.round(rating);
    const stars = [];

    for (let i = 0; i <5; i++) {
        if (i < roundedRating) {
            stars.push('★');
        } else {
            stars.push('☆');
        }
    }

  return (
    <div className="text-xl">
      {stars.join('')}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;