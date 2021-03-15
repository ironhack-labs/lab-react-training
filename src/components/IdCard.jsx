import React from 'react';
import "./../styles/IdCard.css";

const IdCard = (props) => {
    return (
        <div className="idcard-box">  
          <img src={props.picture} alt="id"/>
          <div className="id-info">
            <p><span className="bold">First name: </span>{props.firstName}</p>  
            <p><span className="bold">Last name: </span>{props.lastName}</p>  
            <p><span className="bold">Gender: </span>{props.gender}</p>  
            <p><span className="bold">Height: </span>{props.height}</p>  
            <p><span className="bold">Birth: </span>{props.birth.toDateString()}</p>
          </div>
        </div>
    )
}

export default IdCard
