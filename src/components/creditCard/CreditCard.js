import React, {Component} from 'react';
import './index.css';

class CreditCard extends Component {

  types = {
    'Visa': './img/visa.png',
    'Master Card': './img/master-card.svg'
  };

  render() {
    const {type,number,expirationMonth,expirationYear,bank,owner,bgColor,color} = this.props;
    return (
      <div className={'creditCard'} style={{'background': bgColor, 'color': color}}>
        <div className={'logo'}>
          <img src={this.types[type]} alt=""/>
        </div>
        <div className={'number'}>
          ···· ···· ···· <span>{number % 10000}</span>
        </div>
        <div className={'otherData'}>
          <p>Expires: {expirationMonth < 10 ? '0' + expirationMonth : expirationMonth}/{expirationYear % 100} <span>{bank}</span></p>
          <p>{owner}</p>
        </div>
      </div>
    );
  }
}

export default CreditCard;