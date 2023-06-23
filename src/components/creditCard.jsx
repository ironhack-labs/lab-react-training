import visaLogo from '../assets/images/visa.png'
import mastercardLogo from '../assets/images/visa.png'

function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}=props.creditCard;
    console.log(props)
    let cardType;
    if(type==='Visa'){
        cardType = visaLogo;
    }else if(type==='Master Card'){
        cardType = mastercardLogo;
    }else{ cardType = 'Not Supported'};

    let cardNumber = number.slice(-4)

    return (
    <div style={{backgroundColor: bgColor, color: color}} className="creditCard">
        <div className="cardTypeImg">
            <img src={cardType} style={{width:40, height: 15}} alt='Not supported'/>
        </div>
        <div>
            <p style={{color:'white', fontSize: '24px'}}>**** **** **** {cardNumber}</p>
        </div>
        <div className='creditCardInfo'>
            <p>Expires {expirationMonth} / {expirationYear}  {bank}</p>
        </div>
        <div className='creditCardInfo'>
            <p>{owner}</p>
        </div>
    </div>
  )
}

export default CreditCard;