import React from 'react'
import './creditcard.css';




const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    let src = type === "Visa" ? './img/visa.png' : './img/master-card.svg'

    let endNum = number.slice(4)
    return (

        <div style={{
            backgroundColor: bgColor,
            color: color,
            alignContent: "center",
            borderRadius: '10px',
            marginTop: "3vw",
            marginLeft: "20px",
            marginRight: "20px",
            marginBottom: "3vw",
            paddingLeft: "60px",
            paddingRight: '60px'
        }}>

            <div style={Divlogo}> <img style={imgLogo} src={src} alt={type} /> </div>

            <div> <h5>**** **** **** {endNum}</h5> </div>

            <div>

                <h5> Expires: {expirationMonth}/{expirationYear} {bank} </h5>
                <h5> {owner}</h5>
            </div>

        </div>

    )
}




const Divlogo = {
marginTop: '15px',
marginLeft: '10vw'

}

const imgLogo = {
    weight: "auto",
    height: "20px"
}






export default CreditCard;