

function CreditCard (props) {

    const divStyle = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`,
    }

    const getSecureNumber = (num) => {
        return '••••••••••••' + num.substr(-4)
    }

    return (
        <div style={divStyle} className="CreditCard">
            <div className="BankLogo">
                <img src={props.img} alt="Credit Card Logo"/>
            </div>
            <div className="CreditCardNumber">
                <h2>{getSecureNumber(props.number)}</h2>
            </div>
            <div className="CreditCardInfo">
                <div className="ExpireDate">
                    <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
                </div>
                <div className="BankName">
                    <p>{props.bank}</p>
                </div>
            </div>
            <div className="Owner">
                <p>{props.owner}</p>
            </div>

        </div>
    )
}

export default CreditCard;