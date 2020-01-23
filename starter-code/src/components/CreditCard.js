import React, { Component } from 'react'
import BoxColor from './BoxColor'

export default class CreditCard extends Component {
    mask(number) {
        let indexToModify= number.length - 4;
        for (let i=0; i<indexToModify; i++){
            number = number.replace(number[i], "#")
            }
        return number;
    }
    
    
    render() {

        const myStyle = {
            backgroundColor: this.props.bgColor,
            color: this.props.color,
            borderRadius: "5px",
            padding: "10px",
            width: "250px",
            height: "120px",

        };
        

        let imageSrc = "";
        if(this.props.type === "Visa") {
            imageSrc = "../img/visa.png";
        }else{
            imageSrc = "../img/master-card.svg";
        };

        return (
            <div style= {myStyle}>

                <img src={imageSrc} alt={this.props.type} />
                <div>{this.mask(this.props.number)}</div>
                <div>{this.answer}</div>
                <div>
                    {this.props.exirationMonth}
                    {this.props.exirationYear}
                    {this.props.bank}
                </div>
                <div>{this.props.owner}</div>
            </div>
        )
    }
}
