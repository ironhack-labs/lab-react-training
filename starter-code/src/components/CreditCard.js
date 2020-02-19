import React from 'react'
import style from 'styled-components'


const CreditCard = ({type, number, expirationYear, expirationMonth, bank, owner, bgColor, color}) => {
    const CreditCardComponent = style.div`
    display: flex;
    width: 40%;
    flex-direction: column;
    margin-right: 3%;
    border-radius: 10px;
    text-align: center;
    p {
        color: ${color}
    }
    div{
        display: flex;
        flex-direction: row;
    }
    background-color: ${bgColor};
    img{
        float: right;
        width: 20%;
    }
`
console.log(number.split().splice(number.length-5, 4))
    return (
        <CreditCardComponent>
            <img src={type==='Visa' ? '/img/visa.png' : '/img/master-card.svg'} alt="cardtype"/>
            <p>●●●● ●●●● ●●●● {number.split().splice(number.length-5, 4).join()}</p>
            <div>
                <p>Expires {expirationMonth}/{expirationYear}</p><p>{bank}</p>
            </div>
            <p>{owner}</p>
        </CreditCardComponent>
    )
}

export default CreditCard
