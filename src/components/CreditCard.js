import React from 'react';


class CreditCard extends React.Component {
    render(){
        let src
        src= this.props.type === 'Visa'? '/img/visa.png' : '/img/master-card.svg'

        let expireMonth
        expireMonth =
          this.props.expirationMonth.toString().length === 1
            ? '0' + this.props.expirationMonth
            : this.props.expirationMonth;

        let expireYear
        expireYear = this.props.expirationYear.toString().slice(2,4)

        const cardStyle = {
            backgroundColor: this.props.bgColor,
            color: this.props.color,
        }

        return (
          <div className="creditCard" style={cardStyle}>
            <img src={src} alt={this.props.type}></img>
            <p className='cardNumber'>•••• •••• •••• {this.props.number.slice(12, 16)}</p>
            <span className='expire'>
              Expires {expireMonth}/{expireYear}&emsp;{this.props.bank}
            </span>
            <p className='owner'>{this.props.owner}</p>
          </div>
        );
    }
}

export default CreditCard