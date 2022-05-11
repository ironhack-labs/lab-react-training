import React from "react"
import "./styles.css"

const IdCard = (props) => {
    
const {firstName, lastName, gender, height, picture } = props

return (
    <div className="IdCard-Main">
        <img src={picture} alt="img"/>
        <div className="IdCard-Info">
            <p><strong>First Name:</strong> {firstName}</p>
            <p><strong>Last Name:</strong> {lastName}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Height:</strong> {height}</p>
            <p><strong>Birth:</strong> {props.birth.toDateString()}</p>
        </div>
    </div>
)

}

export default IdCard;

