import React from 'react'

function BoxColor(props){

    let logoImg
    let backgroundColor = props.bgColor
    let textColor = props.color
    let month2digit = ("0" + props.expirationMonth).slice(-2)


    let myStyle = {
        width: "300px",
        height: "auto",
        borderRadius: "20px",
        backgroundColor: backgroundColor,
        color: textColor,
        padding: "20px",
        fontSize: "12px",
        margin: "10px"
    }


    //didn't manage to fetch the img path... so i took img from internet 

    if (props.type === "Master Card"){
        logoImg = "https://1000merken.com/wp-content/uploads/2020/04/Visa-Logo-700x394.png"
    } else {
        logoImg = "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
    } 
    
 
    let myStyleImg = {
        width: "60px"
    }

    return ( 
        <div style={myStyle}>
            <img style={myStyleImg} src={logoImg}/>
            <p>{props.type}</p>
            <p>•••• •••• •••• {props.number[12]}{props.number[13]}{props.number[14]}{props.number[15]}</p>
            <p>Expires {month2digit}/{props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
 
        </div>       
        
    )
}

export default BoxColor;