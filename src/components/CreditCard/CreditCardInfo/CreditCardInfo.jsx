import './CreditCardInfo.css'

function CreditCardInfo({ creditCardInfo }) {
    const { expirationMonth, expirationYear, bank, owner } = creditCardInfo

    const year = expirationYear.toString().substr(-2)

    return (
        <div className='CreditCardInfo'>
            <div className='Expires'>
                <p>Expires: {expirationMonth}/{year} {bank}</p>
            </div>
            <div className='Owner'>
                <p>{owner}</p>
            </div>
        </div>
    )

}

export default CreditCardInfo