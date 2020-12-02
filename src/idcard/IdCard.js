import React from 'react'

export default function IdCard(props) {
    return (
        <div className="idCard">
            <img src={props.picture} alt="person"/>
            <div className="infos">
                <p>
                    <strong>First Name: </strong> {props.firstName}
                </p>
                <p>
                    <strong>Last Name: </strong> {props.lastName}
                </p>
                <p>
                    <strong>Gender: </strong> {props.gender}
                </p>
                <p>
                    <strong>Height: </strong> {props.height}
                </p>
                <p>
                    <strong>Birth: </strong> {props.birth}
                </p> 
            </div>   
        </div>
    )
}
