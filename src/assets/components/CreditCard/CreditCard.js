import React, {Component} from 'react';
import visaLogo from '../../images/visa.png';
import masterCardLogo from '../../images/master-card.svg';
import './CreditCard.css';

// class CreditCard extends Component {
//   constructor({type}){
//     super(type);

//   }
//   cardLogo = {
//     visa: visaLogo,
//     'master Card': masterCardLogo 
//   }

//   render() {
//     return (
//       <div >
//         <div className="credit-card">
//         <img src={this.type} alt="card logo"/>
//         </div>
//       </div>
//     )
//   }
// }

const CreditCard =({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
  return (
    <div className="card-credit" style={{ backgroundColor: `${bgColor}`, color: `${color}`}}>
    <div>
      <h1 className="logo-card">{type}</h1>
      <p>●●●● ●●●● ●●●● {number.slice(-4, 16)}</p>
      <p>Expires: {expirationMonth}/{expirationYear} {bank}</p>
      <p>{owner}</p>
    </div>
    </div>
  );
}

export default CreditCard;
