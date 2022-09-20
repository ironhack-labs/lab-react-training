import Moment from 'moment';

function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div>
      <p className="lastName">Last Name: {lastName}</p>
      <p className="firstName"> First Name:{firstName}</p>
      <p className="gender"> Gender: {gender}</p>
      <p className="height">Height: {height / 100}m</p>
      <p className="birth">Birth: {birth.toDateString()}</p>

      {/* <p className="birth">Birth: {Moment(birth).format('MMM Do YYYY')}</p> */}
      <img className="picture" src={props.picture} alt="picture"></img>
    </div>
  );
}

export default IdCard;
