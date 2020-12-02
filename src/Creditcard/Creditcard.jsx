import React from 'react'
import './Creditcard.css'

const Creditcard = (props) => {
    const { type, 
            number, 
            expirationMonth, 
            expirationYear, 
            bank,
            owner, 
            bgColor,
            color } = props;

    const style = {
        backgroundColor: bgColor, 
        color: color
        }

    console.log(style)

    return (
        <div className='creditcard' style={style}>
            <p> {type} </p>
            <p> {number} </p>
            <p>  Expires {expirationMonth}/{expirationYear}</p>
            <p> {bank} </p>
            <p> {owner} </p>
        </div>
    )
}

export default Creditcard
