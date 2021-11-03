import React from 'react';

export class CreditCard extends React.Component {
  render() {
    return (
      <div>
        <div className="type"><p>{this.props.type}</p></div>
        <div className="number"><p>{this.props.number}</p></div>
        <div className="expires-bank">
          <p>
            Expires
            {this.props.expirationMonth}/
            {this.props.expirationYear}
          </p>
        </div>
        <div className="owner"></div>
        
        
        
        <p>{this.props.bank}</p>
        <p>{this.props.owner}</p>
      </div>
    );
  }
}

