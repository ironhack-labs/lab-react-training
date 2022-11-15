import React from 'react';
import visaImg from '../assets/images/visa.png';
import masterImg from '../assets/images/visa.png';

function CreditCard(props) {
  let {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  function checkType(type) {
    if (type === 'Visa') {
      return visaImg;
    } else {
      return masterImg;
    }
  }

  return (
    <div className="profile-card">
      <div
        className="card"
        style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>

        <div>
          <img src={checkType(type)} alt=""></img>
        </div>

        <div>
          <p>{`⬤⬤⬤⬤ ⬤⬤⬤⬤ ⬤⬤⬤⬤ ${number.substring(number.length - 4)}`}</p>
        </div>

        <div>
          Expires:{expirationMonth}/{expirationYear} {bank}
        </div>

        <div>{owner}</div>
      </div>
    </div>
  );
}

export default CreditCard;
