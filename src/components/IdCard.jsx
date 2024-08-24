import PropTypes from "prop-types";
import Card from "antd/es/card/Card";

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div>
      <Card>
        <p>{lastName}</p>
        <p>{firstName}</p>
        <p>{gender}</p>
        <p>{height}</p>
        <p>{birth.toDateString()}</p>
        <img src={picture} alt={`${firstName} ${lastName}`} />
      </Card>
    </div>
  );
}

IdCard.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  birth: PropTypes.instanceOf(Date).isRequired,
  picture: PropTypes.string.isRequired,
};

export default IdCard;
