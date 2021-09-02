import React from "react";
import "./CreditCard.css";

export default class Credit extends React.Component {

    render() {

        const cardStyle = {
            backgroundColor: `${this.props.bgColor}`,
            color: `${this.props.color}`
        }

        const cardNum = (number) => {
            let digits = number.substr(number.length - 4);
            return digits;
        }
        
        const bank = (type) => {
            if(type === "Visa"){
                return "/img/visa.png"
            }
            if(type === "Master Card"){
                return "/img/master-card.svg"
            }
        }  

        const date = (month) => {
            if(month.toString().length === 1){
                month = "0" + month
                return month
            } else {
                return month
            }
        }

        return (
        <div className="Credit creditCard" style={cardStyle} >
            <img src={bank(this.props.type)} alt="img"></img>
            <p className="numberCard">
            <span>&#183;</span> 
            <span>&#183;</span> 
            <span>&#183;</span>
            <span>&#183;  </span> 
            <span>&#183;</span>
            <span>&#183;</span>
            <span>&#183;</span>
            <span>&#183;  </span>
            <span>&#183;</span>
            <span>&#183;</span>
            <span>&#183;</span>
            <span>&#183;  </span>
            {cardNum(this.props.number)}</p>
            <div className="dataCard">
                <p>Expires {date(this.props.expirationMonth)}/{this.props.expirationYear.toString().substring(2)}</p>
                <p className="bankCard">{this.props.bank}</p>
            </div>
            <p className="ownerCard">{this.props.owner}</p>
        </div>
        );
    }
}