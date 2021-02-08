import React from "react";
import Visa from "./visa.png"
import Master from "./master-card.svg"

function CreditCard({type,number,expirationMonth,expirationYear,bank,owner,bgColor,color}){
    let lastNumbers = number.substr(number.length-4,number.length)
    let typeOfCard = Master
    if(type == "Visa"){
    typeOfCard = Visa
    }
    return(
        <div style={{
            backgroundColor:bgColor,
            color:color,
            width: 400,
            borderRadius:10,
            }}>
        <div style={{
            display:"flex",
            marginBottom:-20,
            justifyContent:"flex-end",
            paddingRight:10,
            paddingTop:10,
        }}>
        <img style={{
            maxWidth:80,
            maxHeight:40
        }} src={typeOfCard}/>
        </div>
        <p style={
            {
                textAlign:"center",
                fontSize: 40,
            }
        }>···· ···· ···· {lastNumbers}</p>
        <p style={
            {
                marginLeft: 10,
                marginBottom:0,
                fontSize: 20,
            }
        }>Expires {expirationMonth}/{expirationYear}  {bank}</p>
        <p style={
            {
                marginLeft: 10,
                marginTop:0,
                fontSize: 20,
                paddingBottom:10
            }
        }>{owner}</p>
        </div>
    );
}

export default CreditCard;