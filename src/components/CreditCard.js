import React from 'react';



function CreditCard({type,number,expirationMonth,expirationYear,bank,owner,bgColor,color}){
    const card = {
        display: 'inline-block',
        borderRadius: 10,
        width: 350,
        alignContent: "center",
        margin: 10,
        padding: 10,
        background: `${bgColor}`,
        color:`${color}`
    }
    // encriptar numeros
    const lastFourDigits = number.substr(-4,4);
    const hashNumbers = '**** **** **** '
    return (
    <div style={card}>
        <img src={imagesUrls(type)} alt="visa o master" width="50" align="right" />
		<p style={{textAlign: "center", fontSize: 30}}>{`${hashNumbers} ${lastFourDigits}`}</p>
        <div style={{textAlign: "left",margin:1}}>
        <div>Expires {formatNumber(expirationMonth)}/{expirationYear}
        <p  style={{display: 'inline-block',paddingLeft: 10,margin:1}}>{bank}</p>
        <br/>{owner}</div>
        </div>
    </div>
    )
    
}
 // dos digitos
const formatNumber = number => `0${number}`.slice(0,2)
// importar imagenes
const imagesUrls = (type) => {
    const urls = {
        "Visa": '..//img/visa.png',
        "Master Card": '../img/master-card.svg'
    }
    return urls[type]
}
 

export default CreditCard