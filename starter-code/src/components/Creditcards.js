import React, { Component } from 'react';

class CreditCard extends Component {
  render() {
    return (
      <div className='Creditcards'>
        <div className='type'> {this.props.type === 'Visa' && <img src="/img/visa.png" alt="logo"/>}</div>
        <div className='type'> {this.props.type === 'Master Card' && <img src="/img/master-card.svg" alt="logo"/>}</div>
       <div className='number'> {this.props.number}</div>
        <div className='expire-date'>
          Expires{this.props.expirationMonth}{this.props.expirationYear}
        </div>
        {this.props.bank}
        {this.props.owner}
        {this.props.bgColor}
        {this.props.color}
      </div>
    )
  }
}

export default CreditCard