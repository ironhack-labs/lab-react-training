import React from "react";
import "../styles/CreditCard.css";

const CreditCard = (props) => {
    const styleObj = {
        backgroundColor: props.bgColor,
        color: props.color
    };

    function creditCardNumberDisplay(str) {
       return  "**** **** **** "+str.slice(-4);
    };



    return (
        <div className="CreditCard" >
            {
                <div style={styleObj}>
                    {props.type}<br />
                    {creditCardNumberDisplay(props.number)}
                    <br />
                    Date : 
                    {props.expirationMonth} /
                    {props.expirationYear} <br />
                    {props.bank} <br />
                    {props.owner}
                </div>
            }
        </div>);
};

export default CreditCard;