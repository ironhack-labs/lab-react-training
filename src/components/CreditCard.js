import React, { Component } from 'react';

export default class CreditCard extends Component {
  ccNum(num) {
    return `•••• •••• •••• ${num.slice(-4)}`;
  }

  exMo(m) {
    if (m >= 12) {
      return m;
    } else {
      return '0' + m;
    }
  }

  render() {
    return (
      <div className="column">
        <div className="box">
          <div className="content">
            <div className="has-text-right">{this.props.type}</div>
            <h3 className="has-text-centered">
              {this.ccNum(this.props.number)}
            </h3>
            <p className="mt-5">
              Expires {this.exMo(this.props.expirationMonth)}/
              {this.props.expirationYear} {this.props.bank}
              <br />
              {this.props.owner}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
