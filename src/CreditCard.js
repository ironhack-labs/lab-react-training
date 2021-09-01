import React, { Component } from 'react';

class CreditCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const divStyle = {
            backgroundColor: this.props.bgColor,
            color: this.props.color,
            width: 340,
            height: 174,
            padding: 20,
            margin: 20,
            borderRadius: 10,
            flex: 1,
        };

        const iconStyle = {
            flex: 1
        };

        const imgStyle = {
            height: 20
        }

        const logo = {
            Visa: "./img/visa.png",
            'Master Card': "./img/master-card.svg",
        };



        return (
            <div style={divStyle}>
                <div style={iconStyle}>
                    <img src={logo[this.props.type]} alt="type of credit card" style={imgStyle}/>
                </div>
                <div>
                    <p>•••• •••• •••• {this.props.number.toString().slice(-4)}</p>
                </div>
                <div>
                    <div>
                        <p>Expires {'0'+this.props.expirationMonth.toString().slice(-2)}/{this.props.expirationYear.toString().slice(2,4)}</p>
                        <p>{this.props.bank}</p>
                    </div>
                    <div>
                        <p>{this.props.owner}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreditCard;