import React from "react";

const CreditCard = (props) => {

    let bgColor="";
    let color="";

    const creditCard = {
        padding: "10px",
        width: "400px",
        height: "200px",
        borderStyle: "solid",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        background: {bgColor},
        color: {color}
        
    }

    const imageStyle = {
        alignSelf: "flex-end",
        height: "20px",
        width: "50px"
    }

    let displayVisa ="";
    let displayMaster ="";

    if (props.type === "Visa"){    
        displayVisa = "./img/visa.png"
         } else if (props.type === "Master Card"){    
        displayMaster = "./img/master-card.svg" 
         }

    // const displayVisa = "/img/visa.png"

return <div style={creditCard}>
    <img style={imageStyle} src={displayVisa} alt=""/>
    <div>{props.number}</div>
    <div>
    <div>Expires: {props.expirationMonth}/{props.expirationYear}</div>
    <div>{props.bank}</div>
    </div>
    {props.owner}
    
</div>

}


export default CreditCard;