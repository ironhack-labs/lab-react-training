import React, { Component } from 'react'
import './CreditCard.css'

export default class CreditCard extends Component {

    state = {
        cardFlag: {
            Visa: "https://seeklogo.net/wp-content/uploads/2016/11/visa-logo-preview-400x400.png",
            'Master Card': "https://seeklogo.net/wp-content/uploads/2011/08/mastercard-logo-400x400.png"
        }
    }

    numberMaskHandler = (num) => {

        let str = '';

        for (let i = 0; i < num.length; i++) {
            if(i < num.length - 4) {
                str += '*'
            } else {
                str += num[i]
            }
        }

        return str
    }

    render() {
        return (
            <div className="creditCardContainer" style={{backgroundColor: this.props.bgColor}}>

                <div className="creditCardDataContainer">
                    <div className="creditCardDataImgContainer">
                        <img  src={this.state.cardFlag[this.props.type]} alt="card brand"/>
                    </div>

                    <p>{this.numberMaskHandler(this.props.number)}</p>

                    <div className="creditCardExpirationContainer">
                        <p>Expires at: {this.props.expirationMonth}/{this.props.expirationYear}</p>
                        <p>{this.props.bank}</p>
                    </div>

                    <p>{this.props.owner}</p>
                </div>

            </div>
        )
    }
}
