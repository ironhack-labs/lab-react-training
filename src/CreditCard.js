import React from 'react'
import styled from 'styled-components'


const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
    const Card = styled.div `
    color: ${color};
    background-color: ${bgColor};
    border-radius: 20px;
    display: inline-block;
    height: 200px;
    margin: 1rem;
    width: 300px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    justify-content: space-around;
    ` 
    let logo
    if(type === 'Visa') {
        logo = '/img/visa.png'
    } else {
        logo = '/img/master-card.svg'
    }
    return (
        <Card>
            <img height='20' width='40' src={logo} alt='logo' />
            <h2>{number}</h2>
            <div>
                <p>Expires: {expirationMonth}/{expirationYear} {bank}</p>
                <p>{owner}</p>
            </div>
        </Card>
    )
}

export default CreditCard
