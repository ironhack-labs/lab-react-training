import './CreditStyles.css'

const CreditCard = (props) => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
   

    const Style = {
        backgroundColor: bgColor,
        color: color
    };
    console.log("styles",bgColor)

    const Icon = {
        Visa: "/src/assets/images/visa.png",
        MasterCard: "/src/assets/images/master-card.svg"
    };

    const showNumber = number.toString().slice(-4)
    const month = `${expirationMonth}`.slice(-2)
    const cardType = type === 'Visa' ? Icon.Visa : Icon.MasterCard
    console.log("the logo", Icon.Visa)

    return(
        <div className='FlexCard'>
        <div className='CreditCard' style={Style}>
            <div className='Icon'>
                <img src={cardType} alt="icon-type"/>
                <p className='cardNumber'>•••• •••• •••• {showNumber}</p>
                <p>Expires 0{month}/{expirationYear}<span>{bank}</span></p>
                <p>{owner}</p>
            </div>
        </div>
        </div>
    )
};

export default CreditCard;