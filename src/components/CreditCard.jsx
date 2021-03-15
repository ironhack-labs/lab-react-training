import React from 'react'

export default function CreditCard(props) {

    // function backgColor(){
    //     if (props.number === "0123456789018845") {
    //         return props.bgColor === "#11aa99"
    //     } else if(props.number === "0123456789010995"){
    //        return  props.bgColor === "#eeeeee"
    //     } else {
    //        return props.bgColor === "#ddbb55"
    //     }
    // }
    return (
        <div style={{background: `${props.bgColor}`, width:"20%", marginLeft: "40%", marginRight:"40%", marginBottom: "5px", marginTop: "5px" , borderRadius: "5px", padding: "0"}
        
        }>
            <div>
            <p style={{textAlign: "right", paddingRight: "10px", paddingTop: "10px"}}> <img src= {props.logo} alt="" style={{width: "60px", height: "auto"}}/> </p>
            <p style={{textAlign: "right", color: `${props.color}`, paddingRight: "25px"}}>**** **** **** {props.number.substr(-4)} </p>
            <div style={{display: "flex", justifyContent: "space-evenly", paddingBottom: "0px"}}>
            <p style={{textAlign: "left",color: `${props.color}`}}> Expires {props.expirationMonth}/{props.expirationYear}</p> <p style={{color: `${props.color}`}}>    Bank {props.bank}</p>  
            </div>
             <p style={{textAlign: "left",color: `${props.color}`, paddingTop:"O px"}}>{props.owner}</p>
            </div>
        </div>
    )

}
