import React from 'react'
import styled from 'styled-components'

const CreditCard = props => {
    const CardBody = styled.div`
        background-image: ${props.type === "Visa" ? "url(./img/visa.png)" : "url(./img/master-card.svg)"};
        background-color: ${props.bgColor};
        background-size: ${props.type === "Visa" ? "48px 18px" : "48px 28px"};
        background-repeat: no-repeat;
        background-position: 95% 16px;
        color: ${props.color};
    `

    return (
        <CardBody className="card--credit">
            <h2>{props.number}</h2>

            <div className="card--credit__info">
                <p>Expires: {props.expirationMonth} / {props.expirationYear}</p>
                <p>{props.bank}</p>
            </div>

            <p>{props.owner}</p>
        </CardBody>
    )

}

export default CreditCard