import React from 'react';

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
    const cardImg = type => {
        return type.toLowerCase() === 'visa'? 'visa.png' : 'master-card.svg';
    }

    // const cards = {
    //     display: 'flex',
    //     width: 'max',
    //     height:'1200px',
    //     flexWrap: 'wrap',
    //     borderStyle: 'solid'
    // }

    const i5 = {
        display: 'flex',
        width: '350px',
        height: '300px',
        justifyContent: "space-evenly",
        flexDirection: "column",
        margin: 10,
        padding: '10px 100px',
        borderRadius: 10,
        background: `${bgColor}`,
        color:`${color}`
    }

    const cardType = {
        display: 'flex',
        width: 100,
        alignSelf: "flex-end",
        marginRight: "-75px",
    }

    const cardNumber = {
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold',
    }

    const cardDetails = {
        display: 'flex',
        alignItems: 'flex-start',
        marginLeft: '-70px',
        flexDirection: 'column',
    }

    return (
    // <div style={cards}>
        <div style={i5}>
            <img style={cardType} src={`/img/${cardImg(type)}`} alt=""/>
            <p style={cardNumber}>{number}</p>
            <div style={cardDetails}>
                <p>Expires {expirationMonth}/{expirationYear}</p>
                <p>{bank}</p>
                <p>{owner}</p>
            </div>
        </div>
    // </div>
    )
}
export default CreditCard;