import Moment from 'react-moment';
import './idCard.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className='card-container'>
      <div>
        <img src={picture} alt={firstName} />
      </div>
      <div>
        <p>
          <span>First Name:</span> {firstName}
        </p>
        <p>
          <span>Last Name:</span> {lastName}
        </p>
        <p>
          <span>Gender:</span> {gender}
        </p>
        <p>
          <span>Height:</span> {height}
        </p>
        <p>
          <span>Birth:</span> <Moment date={birth} format="ddd MMM D Y" />
        </p>
      </div>
    </div>
  );
};

export default IdCard;
