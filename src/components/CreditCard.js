function CreditCard (props) {
    let cardNumber = ''
    for (let i=12; i<16; i++){
        cardNumber += props.number[i]
    }
    return (
        <div className="CreditCard" style={{backgroundColor:`${props.bgColor}`}}>
            <div>
                {props.type}
            </div>
            <p>**** **** **** {cardNumber}</p>
            <p>expire : {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}
export default CreditCard;