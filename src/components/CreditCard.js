import React from 'react'

export default function CreditCard(props) {
    // console.log(props);
    let img = ''
    if (props.type === 'Visa') {
        img = './img/visa.png'
    }
    if (props.type === 'Master Card') {
        img = './img/master-card.svg'
    }
    const style = {
        backgroundColor: props.bgColor,
        color: props.color
    }

    let last4 = props.number.slice(12, 16)
    return (
        <div style={style}>
            <img src={img} alt="" width='30px'/>
            <p> **** **** **** {last4}</p>
            <p>Expires: {props.expirationMonth}/{props.expirationYear}  {props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}
