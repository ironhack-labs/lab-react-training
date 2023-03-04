import visa from '../assets/images/visa.png';
// import master from '../assets/images/master-card.svg';

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }){
    const style = {
        background: bgColor,
        color: color,
        
    }
    if(expirationMonth < 10) expirationMonth = '0'+ expirationMonth;
    return(
        <div name='cartao' style={style}>
            <div className='logo-banco'>
                {type === 'Visa' ? <img src={visa} alt='Visa'/> : <img src={visa} alt='Master Card'/>}                
            </div>
            <div className='numero-cartao'>
                •••• •••• •••• {number.slice(-4)}
            </div>
            <div className='validade'>
                <p>Expires {expirationMonth}/{expirationYear % 1000} </p> 
                <p>{bank}</p>
            </div>
            <div className="titular-cartao">
                <p>{owner}</p>
            </div>
        </div>
    )
}

export default CreditCard;