// components // IdCard.js
// 1 Importaciones 

import React from "react"

//2 Exportacion de funcion

export default function IdCard(props) {  

    return (
        <>        
        <p>lastName: {props.lastName}</p>
        <p>firstName: {props.firstName}</p>
        <p>gender: {props.gender}</p>
        <p>height: {props.height}</p>
        <p>birth: {props.birth.toString()}</p>
        <img src={props.picture}/>    
                               
        </>

    )
} 