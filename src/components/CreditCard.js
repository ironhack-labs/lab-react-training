import { Component } from 'react';
import '../App.css';

class CreditCard extends Component {
    render() {
        let src = '';
        let alt = '';
        if (this.props.type === 'Visa') {
            src = '/img/visa.png'
            alt = 'visa-pic'
        } else {
            src = '/img/master-card.svg'
            alt = 'master-pic'
        }
        return (
            <div className="credit-card" style={{
                backgroundColor: this.props.bgColor,
                color: this.props.color,
              }}>
                <div className="type">
                    <img src={src} alt={alt}/>
                </div>
                <div className="card-number">
                    •••• •••• •••• {this.props.number.substr(-4)}
                </div>
                <div className="exp-date">
                  <span>Expires {('0'+this.props.expirationMonth).substr(-2)}/{this.props.expirationYear.toString().substr(2)} </span>
                  <span className="bank">{this.props.bank}</span>
                </div>
                <div className="owner">
                    {this.props.owner}
                </div>
            </div>
        )
    }
}
export default CreditCard;