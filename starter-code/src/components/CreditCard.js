import React, { Component } from "react";

export default class CreditCard extends Component {
  render() {
    let month;
    if (this.props.expirationMonth !== 3) {
      month = this.props.expirationMonth;
    } else {
      month = "0" + this.props.expirationMonth;
    }

    let cardImage;
    if(this.props.type === 'Visa'){
        cardImage = 'http://pngimg.com/uploads/visa/visa_PNG4.png'
    } else if(this.props.type === 'Master Card') {
        cardImage = 'https://cdn.imgbin.com/5/3/24/imgbin-mastercard-logo-american-express-credit-card-discover-card-mastercard-9SkEBXvbe2kpFzXqyVSyYAfsJ.jpg'
    }

    

    return (
        
      <div
        className="credit-card"
        style={{ backgroundColor: this.props.bgColor, color: this.props.color }}
      >
      {/* {console.log(this.props.expirationMonth.length)} */}
        <div className="col-12 d-flex justify-content-end"><img src={cardImage} height="30px" alt={this.props.type} /></div>
        <div className="col-12 d-flex justify-content-start number"><h4>{this.props.number.replace('012345678901','**** **** **** ')}</h4></div>
        <div className="col-12 d-flex justify-contents-start">
          Expires {month}/{this.props.expirationYear} <span>{this.props.bank}</span>
        </div>
        <div className="col-12 d-flex justify-content-start">{this.props.owner}</div>
      </div>
    );
  }
}
