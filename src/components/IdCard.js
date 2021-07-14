import React from 'react'

const IdCard = (props) => {


    return  (   
        <>
            <p>Last Name: {props.lastName}</p>
            <p>First Name: {props.firstName}</p>
            <p>gender: {props.gender}</p>
            <p>height: {props.heigth}</p>
            <p>birth: {props.birth.toDateString()}</p>
            <img src ={props.picture} alt="logo" />
        </>
    )


}

export default IdCard;