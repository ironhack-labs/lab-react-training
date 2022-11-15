import React from "react";

function IdCard(props){
    const {lastName, firstName, gender, height, birth, picture} = props;
    return(
        
        <div className="idCard">
            <img src={picture} alt="profile pic" />
            <div className="id">
            <p className="firstname">First Name: {firstName}</p>
            <p className="lasttname">Last Name: {lastName}</p>
            <p className="gender">Gender: {gender}</p>
            <p className="height">Height: {height}</p>
            <p className="birth">Birth: {birth.toLocaleString()}</p>
            </div>
        </div>
    )
    
}

export default IdCard