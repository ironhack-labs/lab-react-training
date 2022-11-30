import React from 'react'
import visaLogo from '../assets/images/visa.png';
import mcLogo from '../assets/images/master-card.svg';

const CreditCard = ({type,
                     number,
                     expirationMonth,
                     expirationYear,
                     bank,
                     owner,
                     bgColor,
                     color}) => {

  const cardStyle = {
    color: color,
    backgroundColor: bgColor
  };

  const expMonth = String(expirationMonth).padStart(2, 0);
  let numsDots = "";

  for (let i = 0; i < number.length; i++) {
    let val = i >= number.length - 5 ? number[i] : "•";
    numsDots += val;
  }

  const numsFormat = `
    ${numsDots.slice(0, 3)} ${numsDots.slice(3, 7)} ${numsDots.slice(7, 11)} ${numsDots.slice(11, -1)}`


  return (
    <div className='credit-card' style={cardStyle}>
      <div className='cc-logo'>
      <img src={type === "Visa" ? visaLogo : mcLogo} alt="cc-logo"/>
      </div>
      <div className='cc-num'>
        <p>{numsFormat}</p>
      </div>
      <div className='cc-info'>
        <p>
          Expires {expMonth}/{expirationYear}
          &emsp;&emsp;&emsp;&emsp;&emsp;
          {bank}<br/>
          {owner}
        </p>
      </div>
    </div>
  );
}

export default CreditCard;