import React from 'react'

export default function CreditCard(props) {
    const {bgColor, color} = props
    const style = {
        width: '18rem',
        background: bgColor,
        color: color
    }

    function renderNumbers(props){
            let numbersArray = Array.from(props)
            return <div>•••••••••••{numbersArray.slice(12, 17)}</div>
    }

    function logo(props){
        switch (props) {
            case 'Visa':
                return <img style={{width: '50px', height: 'auto'}} src='https://logos-marcas.com/wp-content/uploads/2020/04/Visa-Logo-650x366.png' alt=""></img>
                break;
        case 'Master Card':
            return <img style={{width: '50px', height: 'auto'}} src='https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg' alt=""></img>
            break;       
            default:
                break;
        }
    }

    return (
        <div class='cardCredit1' style={style}>
            <div class='card-logo'>
                {logo(props.type)}
            </div>
            <p class='h4-card'>{renderNumbers(props.number)}</p>
            <div class='p-card'>
                <p>Expiration Date: {props.expirationMonth}/{props.expirationYear}</p>
                <p>{props.bank}</p>
                 <p>{props.owner}</p>
            </div>
        </div>
    )
}
