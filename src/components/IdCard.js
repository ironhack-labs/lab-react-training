//IMPORTACIONES
import React from "react"


//2 Exportacion de funcion
export default function IdCard(props) {

    return (
        <div className="IdCardSection">
            <div>
                <img src={props.picture} alt="profile" />
            </div>
            <div className="toRight">
                <strong>First name: </strong>
                {props.firstName}
                <br />
                <strong>Last name: </strong>
               
                {props.lastName}
                <br />
                <strong>Gender: </strong>
               
                {props.gender}
                <br />
                <strong>Height: </strong>

                {props.height} m
                <br />
                <strong>Birth: </strong>

                {props.birth.toString()}
                <br />
            </div>  
        </div>
    )
}
