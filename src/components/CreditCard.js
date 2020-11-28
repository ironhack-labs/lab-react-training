import React, { Component } from 'react';

class CreditCard extends Component {

    getGreeting(type) {
        switch (type) {
            case 'Visa':
                return './img/visa.png';
            case 'Master Card':
                return './img/master-card.svg';
        }
    }

    getCreditNum(number) {
        const lastFour = number.slice(-4);
        return `●●●● ●●●● ●●●● ${lastFour}`;
    }

    getTwoDigits(number) {
        return number.length == 1 ? "0" + number : number;
    }

    render({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}=this.props) {

        const divStyle = {
            backgroundColor: bgColor,
            color: color
        }

        const imgUrl = this.getGreeting(type);
        const creditNumber = this.getCreditNum(number)

        return (
            <div className='creditCont' style={divStyle}>
                <div className='creditLogo'>
                    <img src={imgUrl} />
                </div>
                <p className='creditNumber'>{creditNumber}</p>
                <div>
                    <p>Expires {this.getTwoDigits(expirationMonth)}/{this.getTwoDigits(expirationYear)}</p>
                    <p>{bank}</p>
                </div>
                <p>{owner}</p>
            </div>
        )

    }

}

export default CreditCard;