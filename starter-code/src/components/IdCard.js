import React from 'react'

function IdCard({lastName, firstName, gender, height, birth, picture}) {
    return (
        <div className="IdCard">
            <img src={picture}  />
            <div>
                <p><b>First name</b>: {firstName}</p>
                <p><b>Last name</b>: {lastName}</p>
                <p><b>Genre</b>: {gender}</p>
                <p><b>height</b>: {height}</p>
                <p><b>Birth</b>: {birth}</p>
            </div>
        </div>
    )
}

export default IdCard
