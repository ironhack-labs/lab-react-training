import './CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const logo = type === "Master Card" ? './MasterCard_Logo.svg' : './Visa_Inc._logo.svg'
    const cardNum = '**** **** **** ' + number.slice(12)
    const cardExpirationYear = expirationYear.toString().slice(2)
    return (
        <>
            <div className='cardContainer' style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
                <div className='cardLogo'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='cardText'>
                    <h3>{cardNum}</h3>
                </div>

                <div className='cardInfo'>
                    <p>Expires {expirationMonth}/{cardExpirationYear}  {bank}</p>
                    <p>{owner}</p>
                </div>

            </div>

        </>
    )
}

export default CreditCard