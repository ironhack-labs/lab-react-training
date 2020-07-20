import React, { Component } from 'react';
import './Components.css';

export class CreditCard extends Component {
  render() {
    return (
      <div style={{ marginLeft: '30px' }}>
        <div
          className="creditCard"
          style={{
            backgroundColor: this.props.bgColor,
            color: this.props.color,
          }}
        >
          {this.props.type === 'Visa' ? (
            <div>
              <img className="ccLogo" src="/img/visa.png" alt="Visa" />
            </div>
          ) : (
            <div>
              <img
                className="ccLogo"
                src="/img/master-card.svg"
                alt="Master-Card"
              />
            </div>
          )}
          <div className="ccInfo">
            <p>•••• •••• •••• {this.props.number.slice(12)}</p>
            <p>
              Expires {this.props.expirationMonth}/{this.props.expirationYear}{' '}
              {this.props.bank}
            </p>
            <p>{this.props.owner}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CreditCard;
