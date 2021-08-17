import React, {Component} from 'react';

class CreditCard extends Component {
    getBackgroundColor() {
      return this.props.bgColor;
    }

    getLogo() {
      if("Visa" == this.props.type) {
        return "./img/visa.png";
      }
      return "./img/master-card.svg";
    }

    getCreditCardNumber() {
      return "**** **** **** "+this.props.number.substr(this.props.number.length - 4);;
    }

    getExpireMonth() {
      if(this.props.expirationMonth< 10) {
      return "0"+ this.props.expirationMonth;
      }
      return this.props.expirationMonth;
    }

    getExpireYear() {
        return this.props.expirationYear;
    }

    getExpirationDate() {
      return this.getExpireMonth() +"/" +this.getExpireYear();
    }

    render() {
      return <div class="creditCard" style={{background: this.getBackgroundColor(), color: this.props.color}}> 
          <img className="creditCard-logo" src={this.getLogo()}></img>
          <div className="creditCard-number">{this.getCreditCardNumber()}</div>
          <div class="expires">Expires {this.getExpirationDate()} <div class="bankname">{this.props.bank}</div></div>
          <div class="owner">{this.props.owner}</div>
        </div>
    }
}

export default CreditCard;