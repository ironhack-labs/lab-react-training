import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class CreditCard extends React.Component {
  imgFunction(stringCard) {
    if (stringCard === 'Visa') {
      return <img src="img/visa.png" alt="picture" width="40" height="40" />;
    } else if (stringCard === 'Master Card') {
      return (
        <img src="img/master-card.svg" alt="picture" width="40" height="40" />
      );
    }  
  }

  render() {

    const divStyle = {
      backgroundColor: `{this.props.bgColor}`,
      color: `this.props.color`,
      padding: `14px`,
      border: `2px solid white`,
      borderRadius: `14px`,
      margin: `8px`,
    };


    return (
      <div className="container" style={divStyle}>
        <div className="logoCreditCard">
          <p>{this.imgFunction(this.props.type)}</p>
        </div>
        <div className="number">
          **** **** **** {this.props.number.slice(12, 16)}
        </div>
        <div className="expireDate">
          Expires {this.props.expirationMonth}/{this.props.expirationYear}
          {this.props.bank}
        </div>
        <div className="owner">{this.props.owner}</div>
      </div>
    );
  }
}

export default CreditCard;
