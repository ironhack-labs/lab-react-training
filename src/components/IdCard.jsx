import React from "react"

function IdCard({ lastName, firstName, gender, height, birth, picture })
{
    return(
        <div className="idContainer">
            <img src={picture}></img>
            <div className="idInfo">
                <p>First Name: {lastName}</p>
                <p>Last Name: {firstName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                <p>Birth: {birth}</p>
            </div>
        </div>
    )
}

export default IdCard