import React from "react";

function IdCard({lastName, firstName, gender, height, birth, picture}){
    return(
        <div className="flex-box-row">
            <div className="image">
                <img src={picture}/>
            </div>
            <div className="content">
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                <p>Birth: {birth}</p>
            </div>
        </div>
    );
}

export default IdCard;