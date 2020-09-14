import React, { Component } from 'react';

class CreditCard extends Component {
  render() {
    let image;
    if (this.props.type === 'Visa') {
      image = '../img/visa.png';
    }
    if (this.props.type === 'Master Card') {
      image = '../img/master-card.svg';
    }
    const divStyle = {
      backgroundColor: this.props.bgColor,
      color: this.props.color,
    };
    let lastNumbers = `
    ${this.props.number[this.props.number.length - 4]}
    ${this.props.number[this.props.number.length - 3]}
    ${this.props.number[this.props.number.length - 2]}
    ${this.props.number[this.props.number.length - 1]}`;

    return (
      <div style={divStyle} className="credit-card">
        <img src={image}></img>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p> **** **** **** {lastNumbers}</p>
        <p>
          Expires {this.props.expirationMonth}/{this.props.expirationYear}
        </p>
        <p>{this.props.owner}</p>
      </div>
    );
  }
}

export default CreditCard;
