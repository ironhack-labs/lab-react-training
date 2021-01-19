import React from 'react';
import styled from 'styled-components'
import './CreditCard.css'

function CreditCard(props) {
    let cardImg = 'https://inter-antiquariaat.nl/wp-content/uploads/visa-27-565046.png' 
    if (props.type === 'Master Card') {
        cardImg = 'https://insideflyer.nl/wp-content/uploads/2015/06/MasterCard_Logo.svg_-765x420.png'
    }

    const Card = styled.button`
      background: ${props.bgColor};
      color: ${props.color};
`;
    return(
        <Card className='Card' >
            <img src={cardImg} alt="logo"/>
            <h3>{props.number}</h3>
                <div>
                    <p>Expires:{props.expirationMonth.toString()}/{props.expirationYear.toString()} {props.bank}</p>
                    <br />
                    <p>{props.owner}</p>
                </div>
        </Card>
    )
}

export {CreditCard}