import React from "react"
import styled from "styled-components"

const CreditCard = (props) => {

    const image = props.type === "Visa" ? "/img/visa.png" : "/img/master-card.svg";
    const number = `**** **** **** ${props.number.split("").splice(12,4).join("")}`;


    const Card = styled.article`
        background-color: ${props.bgColor};
	    border-radius: 15px;
        width: 350px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
            width: 50px;
            align-self: flex-end;
        }
        h2 {
            color: ${props.color};
        }
        div {
            display: flex;
            align-self: flex-start
        }
        p {
            color: ${props.color};
            padding-left:15px;
            align-self: flex-start;
        }
    `
    return (
        <Card>
            <img src={image} alt=""/>
            <h2>{number}</h2>
            <div>
                <p>Expires: {props.expirationMonth}/{props.expirationYear}</p>
                <p>{props.bank}</p>
            </div>
            <p>{props.owner}</p>
        </Card>
    )
} 

export default CreditCard;