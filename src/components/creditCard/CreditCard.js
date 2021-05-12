import './creditCard.css'

// `type`: A string that can be `"Visa"` or `"Master Card"`
// - `number`: A string that is a number of the credit card. You will only display the 4 last digits for security reasons 😉
// - `expirationMonth`: A number that represents the month, between 1 and 12
// - `expirationYear`: A number that represents the year
// - `bank`: A string that represents the name of the bank
// - `owner`: A string that represents the name of the owner
// - `bgColor`: A string for the background color of the card
// - `color`: A string for the text color of the card

// Take your time to do as close to the output. You probably have to use flexbox.

// **Example**

// ```js
// <CreditCard
//   type="Visa"
//   number="0123456789018845"
//   expirationMonth={3}
//   expirationYear={2021}
//   bank="BNP"
//   owner="Maxence Bouret"
//   bgColor="#11aa99"
//   color="white" />

const CreditCard = props => {
    const getStyle = (bgColor, color) => {
        return {
            backgroundColor: bgColor,
            color
        }
    }

    return (
        <div className="credit-card" style={getStyle(props.bgColor, props.color)}>
            <div className="logo"><img src={ props.type === "Visa" ? '/img/visa.png' : '/img/master-card.svg' } alt={props.type + ' logo'}/></div>
            <h3 className="credit-number">**** **** **** {props.number.slice(-4)}</h3>
            <div className="info">
                <p>
                    <span>{`Expires: ${props.expirationMonth}/${props.expirationYear}`}</span>
                    <span>{props.bank}</span>
                </p>
                <p>{props.owner}</p>
            </div>
        </div>
    )
}

export default CreditCard;