import React from 'react';

const IdCard = (props) => {

    return (
        <>
        <p>Last Name:{props.lastName}</p>
        <p>First Name:{props.girstName} </p>
        <p>gender: {props.gender}</p>
        <p>height:{props.heigth} </p>
        <p>birth:{props.birth} </p>
        <img src ={props.picture} alt="logo"/>
        </>
    )
}
export default IdCard;