import PropTypes from 'prop-types';

function IdCard(props) {

    return (
        <div>
            <img src={props.picture} />
            <p><strong>First Name</strong>: {props.firstName}</p>
            <p><strong>Last Name</strong>: {props.lastName}</p>
            <p><strong>Gender</strong>: {props.gender}</p>
            <p><strong>Height</strong>: {props.height}</p>
            <p><strong>Birth</strong>: {props.birth.toDateString()}</p>
        </div>
    );
}

IdCard.propTypes = {
    picture: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    birth: PropTypes.instanceOf(Date).isRequired,
};

export default IdCard;