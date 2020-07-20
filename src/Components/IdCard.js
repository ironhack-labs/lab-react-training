import React from 'react'
import '../css/idCard.css'


/*PROPS LIST
lastName="Doe"
firstName="John"
gender="male"
height={178}
birth={new Date('1992-07-14')}
picture="https://randomuser.me/api/portraits/men/44.jpg"
 */



const IdCard = (props) => {
    return (
        <div className="idCard">
        <img src={props.picture} alt={`${props.firstName} ${props.lastName}`}/>
        <div className="idInfos">
        <div>
            <span className="bold"> First Name: </span> {props.firstName}
        </div>
        <div>
            <span className="bold"> Last Name: </span> {props.lastName}
        </div>
        <div>
            <span className="bold"> Gender: </span> {props.gender}
        </div>
        <div>
            <span className="bold"> Height: </span> {props.height/100}m
        </div>
        <div>
            <span className="bold"> Birth: </span> {props.birth.toDateString()}
        </div>
        </div>
        </div>
    )
}

export default IdCard
