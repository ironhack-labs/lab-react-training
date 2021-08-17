import React, {Component} from 'react';

class CreditCard extends Component {
    getBackgroundColor() {
      return this.props.bgColor;
    }

    render() {
      return <div class="creditCard" style={{background: this.getBackgroundColor()}}> 
          <div>{this.props.type}</div>
          <div>{this.props.number}</div>
          <div>{this.props.expirationMonth}</div>
          <div>{this.props.expirationYear}</div>
          <div>{this.props.bank}</div>
          <div>{this.props.owner}</div>
          <div>{this.props.bgColor}</div>
          <div>{this.props.color}</div>
        </div>;
    }
}

export default CreditCard;