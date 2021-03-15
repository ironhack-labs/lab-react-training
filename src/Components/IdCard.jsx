import React from 'react'


function IDCard(props) {

    return (
        <div className="idCard">
            <p>First Name : {props.lastName}</p>
            <p>Last Name :{props.firstName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Birth: {props.birth}</p>
            <img src={props.picture} alt="pic"/>
        </div>
    )
}


export default IDCard