import React from "react"

let IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
        let date = new Date(birth).toDateString()
    
    return(
        <div>
        <img src={picture} alt=''/>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth date: {date}</p>
        </div>
    )
}

export default IdCard