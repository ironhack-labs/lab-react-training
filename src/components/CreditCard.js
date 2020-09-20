import React from 'react';

class CreditCard extends React.Component {
  render() {
    this.number = this.props.number.slice(12, 16);
    this.style = {
      backgroundColor: `${this.props.bgColor}`,
      color: `${this.props.color}`,
    };

    if (this.props.type === 'Visa') {
      this.image = '/img/visa.png';
    } else if (this.props.type === 'Master Card') {
      this.image = '/img/master-card.svg';
    }
    return (
      <div className="card" style={this.style}>
        <div className="type">
          <img src={this.image} alt={this.type} />
        </div>
        <div className="number">
          <span>**** **** **** {this.number}</span>
        </div>
        <div className="details">
          <span>
            Expires {this.props.expirationMonth} /{' '}
            {this.props.expirationYear % 100}
          </span>
          <span> {this.props.bank}</span>
        </div>
        <div className="details">
          <span>{this.props.owner}</span>
        </div>
      </div>
    );
  }
}

export default CreditCard;
