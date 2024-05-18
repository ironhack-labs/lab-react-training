
import PropTypes from 'prop-types';
import "./idcard.css"


 function IdCard ({firstName, lastName, gender, height, birth, picture}) {

return (
    <div className="id-card">
    <div className="id-card__picture">
      <img src={picture} alt={`${firstName} ${lastName}`}  />
      </div>
      <div className="id-card__info">
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height} cm</p>
        <p><strong>Birth:</strong> {birth.toDateString()}</p>
      </div>
    </div>
  );

}

IdCard.propTypes = {
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    gender: PropTypes.string,
    height: PropTypes.number,
    birth: PropTypes.instanceOf(Date),
    picture: PropTypes.string,
  };
  
  export default IdCard;