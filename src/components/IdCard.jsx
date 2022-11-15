import React from "react"
import './idCard.css'
function IdCard (props){
    const {lastName, firstName, gender, height, birth} = props
    

    const dateStr= String(birth).split(' ').splice(0, 4).join(' ')
    return (
        
    <div className="con">
        <div className="idCard">
            <div className="idImg">
                <img src={props.picture} alt="" />   
            </div>
            <div className="idtext">
                <p><b>Last name:</b> {lastName}</p>
                <p><b>First name:</b> {firstName}</p>
                <p><b>Gender:</b> {gender}</p>
                <p><b>Height:</b> {height}</p>
                <p><b>Birth:</b> {dateStr}</p>
            </div>
        </div>
    </div>
    )
}

export default IdCard; 