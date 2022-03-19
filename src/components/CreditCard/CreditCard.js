import React, { Component } from 'react';
import visaLogo from '../../assets/images/visa.png';
import masterCardLogo from '../../assets/images/master-card.svg';
import styles from './CreditCard.module.css';

class CreditCard extends Component {
  constructor(props) {
    super(props);
    this.card = props.type.toLowerCase();
    this.cardNum = props.number.split('').slice(12);
    this.bull = '•••• •••• •••• ';
    this.expired = `${props.expirationMonth} / ${props.expirationYear}`;
  }

  logos = {
    visa: visaLogo,
    'master card': masterCardLogo,
  };

  render() {
    return (
      <div className="section">
        <div
          style={{ backgroundColor: `${this.props.bgColor}` }}
          className={styles.background_box}
        >
          <div className={styles.card_logo_box}>
            <img src={this.logos[this.card]} alt="test" height="100%" />
          </div>

          <div
            className={styles.card_number}
            style={{ color: this.props.color }}
          >
            {this.bull}
            {this.cardNum}
          </div>
          <div
            className={styles.owner_details}
            style={{ color: this.props.color }}
          >
            <div>
              Expires {this.expired} - {this.props.bank}
            </div>
            <div>{this.props.owner}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreditCard;
