import './CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    return (
        <div className='creditCard' style={{
            backgroundColor: bgColor,
            color: color,
            width: '18rem',
            height: '12rem',
            padding: '1.5rem 3rem 1rem 3rem'
        }}>
            <p>{type}</p>
            <p className='number'>**** **** {number.slice(-4)}</p>
            <p>{expirationMonth} / {expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard
