import './CreditCard.css'

const CreditCard = props => {
    const { number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    const onlyFour = String(number).slice(-4);
    return (
        <div className='CreditCard'>
            <div style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
                <h1> ********* {onlyFour} </h1>
                <h3>Expires {expirationMonth} </h3>
                <h3> {expirationYear} </h3>
                <h3>{bank} </h3>
                <h3> {owner}</h3>
            </div>
        </div>
    )
}

export default CreditCard



