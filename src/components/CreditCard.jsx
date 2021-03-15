import React from 'react'
import '../styles/CreditCard.css'

const CreditCard = (props) => {
    const bgColor = props.bgColor
    const color = props.color
    const myCard = {
        backgroundColor: bgColor,
        color: color
    }
    // function dateExp(date){
    //     if (date.length === 1){
    //         return date.replace(`${date}`, `0${date}`)
    //     }
    // }
    return (
        <div className="CreditCards" style={myCard}>
            <div className="Creditcard">
                <h1>{props.type}</h1>
                <h2>{props.number}</h2>
                <p className="firstLine"> Expires {props.expirationMonth}/{props.expirationYear}</p>
                <p className="firstLine"> {props.bank} </p>
                <p className="secondLine"> {props.owner} </p>
            </div>
        </div>
    )
}

export default CreditCard
