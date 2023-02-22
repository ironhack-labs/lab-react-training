import React, {Fragment} from "react";
import './App.css'

 const IdCard = (props) =>{
    const {lastName, firstName, birth, gender, height, picture} = props
    return (
        <div className="IdCard">
            <img src={picture} alt="" />
            <div>
            <p><strong>LastName:</strong>{lastName}</p>
            <p><strong>FirstName:</strong>{FirstName}</p>
            <p><strong>Birth:</strong>{birth.toString()}</p>
            <p><strong>Gender:</strong>{gender}</p>
            <p><strong>Height:</strong>{height}</p>
            <img src={picture} alt="IdFoto"></img> 
            </div>
        
        </div>
    )
}