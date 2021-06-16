import React from 'react';



const IdCard = ({lastName,firstName,gender,height,birth,picture}) =>(
    <div className="idCard">
        <img src={picture}/>
        <div className="idText">
        <span><b>Last Name: </b>{lastName}</span>
        <span><b>First Name:</b> {firstName}</span>
        <span><b>Gender: </b>{gender}</span>
        <span><b>Height:</b> {height}</span>
        <span><b>Birth:</b> {birth}</span>
        </div>
        

    </div>
)

export default IdCard;