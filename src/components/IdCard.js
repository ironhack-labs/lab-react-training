//Conceptualmente, los componentes son como las funciones de JavaScript. Aceptan entradas arbitrarias (llamadas “props”) y devuelven a React elementos que describen lo que debe aparecer en la pantalla.
import React from 'react';

import "./IdCard.css"

function IdCard(props){
return(
    <div className="idcard">
         <img src={props.picture} alt="profile-picture"/>
         <div>
         <p>
        <strong>First Name: </strong>
        {props.firstName}</p>
        <p>
        <strong>Last Name: </strong>
            {props.lastName}</p>
        <p>
        <strong>Gender: </strong>
        {props.gender}</p>
        <p>
        <strong>Height: </strong>
        {props.height}</p>
        <p>
        <strong>Birth: </strong>
        {props.birth.toDateString()}</p>
        </div>

    </div>
)
}

export default IdCard;
