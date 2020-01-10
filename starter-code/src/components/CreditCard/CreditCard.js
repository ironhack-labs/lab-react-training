import React, { Component } from 'react';
import './style.css';
class CreditCard extends Component {
  render() {
    return (
      <div className='card'>
        <div className='band'> {this.props.type}</div>
        <div className='number'> {this.props.number}</div>
        <div className='expire-date'>
          Expires
          {this.props.expirationMonth}
          {this.props.expirationYear}
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

