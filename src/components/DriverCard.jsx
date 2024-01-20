import PropTypes from 'prop-types';

function DriverCard(props) {
    const { name, rating, img, car } = props;

    let currentRating;
    
    switch(true) {
        case rating < 0.5:
            currentRating = "☆☆☆☆☆";
            break;
        case rating > 0.5 && rating < 1.5:
            currentRating = "★☆☆☆☆";
            break;
        case rating >= 1.5 && rating < 2.5:
            currentRating = "★★☆☆☆";
            break;
        case rating >= 2.5 && rating < 3.5:
            currentRating = "★★★☆☆";
            break;
        case rating >= 3.5 && rating < 4.5:
            currentRating = "★★★★☆";
            break;
        case rating > 4.5:
            currentRating = "★★★★★";
            break;
    }

    const imgStyle = {
        width: "25%"
    }
    
    return (
        <div>
            <img src={img} alt={img} style={imgStyle}/>
            <h3>{name}</h3>
            <p>{currentRating}</p>
            <p>{car.model} - {car.licensePlate} </p>
        </div>
    );
}

DriverCard.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    car: PropTypes.shape({
        model: PropTypes.string.isRequired,
        licensePlate: PropTypes.string.isRequired,
    }).isRequired,
};

export default DriverCard;