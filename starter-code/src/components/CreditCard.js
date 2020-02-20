import React from 'react'
import styled from 'styled-components'

const CreditCard = (props) => {

    const image = props.type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg'
    const number = `xxxx xxxx xxxx ${props.number.split('').splice(12,4).join('')}`


    const Card = styled.article`
        background-color: ${props.bgColor};
	    border-radius: 10px;
        width: 300px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            width: 50px;
            align-self: flex-end;
        }
        h6{
            color: ${props.color};
            font-size: 20px;
            margin: 50px 0 20px 0;
        }
        div{
            display: flex;
            justify-content: space-between;
            width: 90%;
        }
        p{
            color: ${props.color};
            font-size: 15px;
            padding: 5px 0;
            width: 90%;
        }
    `
    return(
        <Card style={creditCard}>
            <img src={image} alt='#'/>
            <h2 style={numeros}>{number}</h2>
            <div>
                <p style={info}>Expires: {props.expirationMonth}/{props.expirationYear}</p>
                <p style={info}>{props.bank}</p>
            </div>
            <p style={info}>{props.owner}</p>
        </Card>
    )
}

const creditCard = {
    width: '400px',
    height: '200px',
    margin: '10px',
}

const numeros = {
    color: 'white',
}

const info = {
    fontSize: '18px'
}


export default CreditCard