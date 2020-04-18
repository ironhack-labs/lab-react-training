import React, { Component } from 'react';


class CreditCard extends Component {
    render() {
        const {
            type,
            number,
            expirationMonth,
            expirationYear,
            bank,
            owner,
            bgColor,
            color } = this.props

        const divStyle = {
            background: `${bgColor}`,
            color: `${color}`,
        }
        return (
            <div style={divStyle} className='container-credit-card'>
                <div>
                    {type === "Visa" && <img className="type-style" src="/img/visa.png" alt="visa" />}
                    {type === "Master Card" && <img className="type-style" src="/img/master-card.svg" alt="master-card" />}
                </div>
                <p>•••• •••• •••• {number.substr(-4)}</p>
                <p>0{expirationMonth}/{expirationYear}</p>
                <p>{bank}</p>
                <p>{owner}</p>
            </div>
        )

    }
}


export default CreditCard;