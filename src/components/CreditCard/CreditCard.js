import './CreditCard.css'

const CreditCard = props => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    return (
        <div className='creditcard'>
            <div style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
                <img className='credit-image' src={type}></img>
                <h3>{number}</h3>
                <h5>Expires {expirationMonth}</h5> / <h5>{expirationYear}</h5>  <h5>{bank}</h5>
                <h5>{owner}</h5>
            </div>
        </div>
    )

}

export default CreditCard