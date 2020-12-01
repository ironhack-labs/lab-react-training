import React from 'react'
import DriverCard from '../DriverCard/DriverCard'
import {FaCircle} from "react-icons/fa"

export default function CreditCard(props) {
    const style = {
        backgroundColor: `${props.bgColor}`,
        marginLeft:480,
        marginRight:480,
        borderRadius:12,
        color:"white",
        fontStyle:"Times New Roman"
        
    }
    return (
        <div style = {style}>
            <div style = {{textAlign:"right"}}>
            <img src ="/img/visa.png" 
            style = {{paddingRight:20,paddingTop:20 , width:'15%', height:'15%'}} 
            />
            </div>
            <p style= {{textAlign:"center"}}> 
            <FaCircle size ="0.5em"/>
            <FaCircle size ="0.5em"/>
            <FaCircle size ="0.5em"/>
            <FaCircle size ="0.5em"/>
            {" "}
            <FaCircle size ="0.5em"/>
            <FaCircle size ="0.5em"/>
            <FaCircle size ="0.5em"/>
            <FaCircle size ="0.5em"/>
            {" "}
            <FaCircle size ="0.5em"/>
            <FaCircle size ="0.5em"/>
            <FaCircle size ="0.5em"/>
            <FaCircle size ="0.5em"/>
            {" "+props.number.substring(12)}
            </p>
            <div style = {{paddingLeft:20, lineHeight:0.2}}>
            <p>{"Expires "+props.expirationMonth +"/"+props.expirationYear}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {props.bank}
            </p>
            <p style = {{paddingBottom:19, marginTop:0}}>{props.owner}</p>  
            </div>
        </div>
    )
}
