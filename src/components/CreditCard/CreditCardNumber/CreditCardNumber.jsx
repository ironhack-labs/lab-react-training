import './CreditCardNumber.css'

function CreditCardNumber({ number }) {
    const lastFourNumbers = number.substr(-4)
    return (
        <div className='CreditCardNumber'>
            <p>●●●● ●●●● ●●●● {lastFourNumbers}</p>
        </div>
    )
}

export default CreditCardNumber