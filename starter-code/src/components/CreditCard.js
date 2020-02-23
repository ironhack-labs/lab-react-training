import React from 'react'
import styled from 'styled-components'

const CreditCardS = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: ${({bgColor}) => bgColor || '#000'};
    padding: 10px;
    color: ${({color}) => color || 'black'};
    width: 300px;
    height: 180px;
    border-radius: 10px;
    margin-left: 40px;
    img {
        width: 55px;
        height: 25px,
    }
    .number {
        margin: 50px 0 20px 0;
        text-align: center;
        font-size: 1.7rem;
    }
`

function CreditCard({type, bgColor, color, number, expirationMonth, expirationYear, bank, owner}) {
    return (
        <CreditCardS bgColor={bgColor} color={color}>
            <img src={(type==='Visa' ? '/img/visa.png' : '/img/master-card.svg')} />
            <div className="number">**** **** **** {number.split('').splice(12,4).join('')}</div>
            <div>Expires: {expirationMonth}/{expirationYear.toString().split('').splice(2,2).join('')}  {bank}</div>
            <div>{owner}</div>
        </CreditCardS>
    )

}

export default CreditCard
