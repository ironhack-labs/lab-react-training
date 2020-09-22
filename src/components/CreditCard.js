import React, { Component } from 'react'

export default class CreditCard extends Component {
    render() {
        // function cardmonth() {
        //     let month = this.props.expirationMonth
        //     if (month <= 9) {
        //         return '0' + month
        //     } else {
        //         return month
        //     }

        // }
        
        return (
            
        <div className="CreditCard" style={{backgroundColor: this.props.bgColor, color: this.props.color}}>
        
            <div className="cardLogo">
            {this.props.type === 'Master Card' && <img src="/img/master-card.svg" alt=""/>}
            {this.props.type === 'Visa' && <img src="/img/visa.png" alt=""/>} 
            </div>

            <h2>**** **** **** **** {this.props.number.slice(-4)}</h2>
            <br/>
            Expires: {this.props.expirationMonth}/{this.props.expirationYear.toString().slice(-2)}
            <br/>
            {this.props.bank}
            <br/>
            {this.props.owner}
            
           
        </div>
            
        )
    }
}
