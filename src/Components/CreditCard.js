import React, {Component} from 'react';

class CreditCard extends Component{
    render() {
        return(
            <div className = "CreditCard-card" style = {{backgroundColor:this.props.bgColor, color:this.props.color}}>
                
                <div className ="CreditCard-logo">
                    <img src="" alt=""/>
                    {this.props.type === "Visa" ? <img src="./img/visa.png" alt=""/> : <img src="./img/master-card.svg" alt=""/> }
                </div>
                <div className = "CreditCard-number">
                    <h1>•••• •••• •••• {this.props.number.toString().slice(12)} </h1>    
                </div>
                <div className = "CreditCard-date-bank">
                    <div className = "CreditCard-date">
                        
                        Expires {this.props.expirationMonth < 10 ? `0${this.props.expirationMonth}` : this.props.expirationMonth }/{this.props.expirationYear.toString().slice(2)}
                        
                    </div>
                    <div className = "CreditCard-bank">
                        {this.props.bank}
                    </div>
                </div>
                <div className = "CreditCard-name">
                    {this.props.owner} 
                </div>

            </div>
        )
    }
}
export default CreditCard