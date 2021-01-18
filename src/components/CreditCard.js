import React from 'react'
import '../components/CreditCard.css'


class CreditCard extends React.Component {
    render() {
        let bgCol = {'backgroundColor': `${this.props.bgColor}`}
        let textCol = {'color': `${this.props.color}`}
        let lastFour = this.props.number.slice(12,16);
        let expirationString = () => {return this.props.expirationMonth < 10 ? `0${this.props.expirationMonth}/${this.props.expirationYear%100}` : `${this.props.expirationMonth}/${this.props.expirationYear%100}` };
        

        let imgSrc = ""

        if (this.props.type === 'Visa') {
            imgSrc = '../public/img/visa.png';
        } else {
            imgSrc = '../public/img/master-card.svg';
        }

        return(
            <div className="CreditCard" style={bgCol}>
                <img src={imgSrc} alt={this.props.type}/>
                <div style = {textCol}>
                    <p>{`●●●● ●●●● ●●●● ${lastFour}`} </p>
                    <p>{`Expires: ${expirationString()}`}</p>
                    <p>{`${this.props.bank}`}</p>
                    <p>{`${this.props.owner}`}</p>
                </div>
            </div>
        );
    }
}

export default CreditCard;