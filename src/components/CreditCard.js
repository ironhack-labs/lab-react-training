import React from 'react'

export default function CreditCard(props) {
    const {bgColor, color} = props
    const style = {
        width: '18rem',
        background: bgColor,
        color: color
    }

    // function renderNumbers(props){
        
    //     let bluredNumbers = (() => {
    //         let numbersArray = Array.from(props)
    //         for(let i = 0; i < 12; i++){
    //             numbersArray.pop()
    //         }
    //         return numbersArray;
    //     })(props)
    // }
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
        <div class='card m-4 p-2' style={style}>
            <div class='d-flex align-self-end'>
                {logo(props.type)}
            </div>
            <p class='h4'>{renderNumbers(props.number)}</p>
            <div class='d-flex justify-content-between'>
                <p>Expiration Date: {props.expirationMonth}/{props.expirationYear}</p>
                <p>{props.bank}</p>
            </div>
            <p>{props.owner}</p>
        </div>
    )
}
