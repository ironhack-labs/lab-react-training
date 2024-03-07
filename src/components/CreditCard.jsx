import React from 'react';

// Definition of the component CreditCard
/*class CreditCard extends Component {
  render() {
    return (
      <div className="CreditCard" style={{
        backgroundColor: this.props.bgColor,
        color: this.props.color,
      }}>
        <div className="type">
        {this.props.type === "Visa" && <img src="./src/assets/images/visa.png" alt='img-name'/>}
          {this.props.type === "Master Card" && <img src="./src/assets/images/master-card.svg" alt='img-name' /> }
        </div>
        <div className="number">•••• •••• •••• {this.props.number.substr(-4)}</div>
        <div className="expires-bank">
          <span>Expires {('0'+this.props.expirationMonth).substr(-2)}/{this.props.expirationYear.toString().substr(2)} </span>
          <span className="bank">{this.props.bank}</span>
        </div>
        <div className="owner">{this.props.owner}</div>
      </div>
    );
  }
}   

export default CreditCard;*/
const CreditCard =({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {


  return (
    <div className="card-credit" style={{ backgroundColor: `${bgColor}`, color: `${color}`}}>
    <div>
      <h3 className="logo-card">{type}</h3>
      <p>●●●● ●●●● ●●●● {number.slice(-4, 16)}</p>
      <p>Expires: {expirationMonth}/{expirationYear} {bank}</p>
      <p>{owner}</p>
    </div>
    </div>
  );
}

export default CreditCard;
