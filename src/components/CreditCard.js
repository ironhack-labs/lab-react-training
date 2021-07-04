import styled from "styled-components";

const Card= styled.div`
    width: 340px;
    height: 147px;
    background-color: ${props => props.bg};
    color: ${props => props.c};
    border-radius: 5px;
    margin: 5px;
    padding: 5px
`;

const CreditCard =({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color})=>{
    const logo = type === "Visa" ? 'img/visa.png' : 'img/master-card.svg'; 
    return (
        <Card bg={bgColor} c={color}>
            <img alt={type} src={logo} width='35px'/>
            <div>**** **** **** {number.slice(number.length-4)}</div>
            <div>
                <p>Expires <span>{expirationMonth}/{expirationYear}</span> <span>{bank}</span></p>
            </div>
            <p>{owner}</p>
        </Card>
    )
}

export default CreditCard