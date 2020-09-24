import React from 'react'

export default function CreditCard(props) {
    let cardPic = '';
    switch(props.type){
        case 'Visa':
            cardPic = 'https://seeklogo.net/wp-content/uploads/2016/11/visa-logo-preview.png';
            break;
        case 'Master Card':
            cardPic = 'https://w7.pngwing.com/pngs/436/322/png-transparent-mastercard-logo-moneylive-mobile-payment-brand-mastercard-text-orange-logo.png';
            break;
        default:
            cardPic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTo705JlrKLpR2CQOqr5vRkVZjdykI_6TUBLw&usqp=CAU';
    }
    return (
        <div className= 'creditCardsContainer'>
                <div className='cardContainer' style={{backgroundColor:props.bgColor}}>
                    <div className='cardLogo'>
                        <img src={cardPic} alt='card logo'></img>
                    </div>
                    <div className='cardNumber'>
                        <h2 style={{color:props.color}}>•••• •••• •••• {props.number.slice(-4)}</h2>
                    </div>
                    <div style={{color:props.color}} className='creditCardLetters'>
                        <p>Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
                        <p>{props.owner}</p>
                    </div>
                </div>
        </div>
    )
}
