import React from 'react';
import styled from 'styled-components';

const creditCardComponent = (props) => {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;

    const image = type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg'
    const numberCreditCard = `xxxx xxxx xxxx ${number.split('').splice(12,4).join('')}`


    const CreditCard = styled.article`
        background-color: ${bgColor};
        border-radius: 10px;
        width: 400px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
            width: 50px;
            align-self: flex-end;
        }
        h6 {
            color: ${color};
            font-size: 20px;
        }
        div {
            display: flex;
            justify-content: space-between;
            width: 90%;
        }
        p {
            color: ${color};
            font-size: 15px;
            padding: 5px 0;
            width: 90%;
        }
    `
    

    return (
        <CreditCard>
            <img src={image} alt='card type'/>
            <h6>{numberCreditCard}</h6>
            <div>
                <p>Expires: {expirationMonth}/{expirationYear}</p>
                <p>{bank}</p>
            </div>
            <p>{owner}</p>
        </CreditCard>
    )
}

export default creditCardComponent;
