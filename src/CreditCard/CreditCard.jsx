import './CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    let colors = {
        backgroundColor: bgColor,
        color
    }

    return (

        <article className='creditCard-box'>
            <div style={colors} className="creditCard">
                <div className='card-items'>
                    <p>{type}</p>
                </div>
                <div className='card-items'>
                    <p>{number}</p>
                </div>
                <div className='card-items'>
                    <p>Expires{expirationMonth}/{expirationYear}  {bank}</p>
                    <p>{owner}</p>
                </div>
            </div>
        </article>

    )
}


export default CreditCard