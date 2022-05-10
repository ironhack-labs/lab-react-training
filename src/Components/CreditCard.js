import React,{useState} from "react"

export const CreditCard = (props)=>{
    const {type,number,expirationMonth,expirationYear,bank,owner,bgColor,color} = props
    const Array = number.split("")
    const Digitos = Array.splice(12,16) 
    return (
        <div style={{
            "display":"flex",
            "width":"27%",
            "margin":"10px 1%",
            "padding":0,

        }}>
            <div style={{
                "backgroundColor":bgColor,
                "width":"100%",
                "margin":"10px 1%",
                "borderRadius":"8px",
            }}>
                <h1 style={{
                    "display":"flex",
                    "justifyContent":"right",
                    "marginRight":"10px"
                }}>{type}</h1>
                <h2 style={{
                    "color":"white",
                    "display":"flex",
                    "justifyContent":"center",
                    "fontSize":"30px"
                }}>{`•••• •••• •••• ${Digitos[0]+Digitos[1]+Digitos[2]+Digitos[3]}`}</h2>
                <p style={{
                    "color":"white",
                    "margin-left":"20px",
                    "marginBottom":"2px"
                }}>{`Expires ${expirationMonth}/${expirationYear} ${bank}`}</p>
                <p style={{
                    "color":"white",
                    "margin-left":"20px",
                    "marginTop":"2px"
                }}>{owner}</p>
            </div>
        </div>
    )

}