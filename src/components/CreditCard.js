import visa from '../assets/images/visa.png'
import master from '../assets/images/master-card.svg'

const CreditCard = props => {
    const { type, number, expirationMonth,
        expirationYear, bank, owner, bgColor, color } = props

    let image

    if (type === 'Visa') {
        image = visa
    }
    if (type === 'Master Card') {
        image = master
    }

    const divStyle = {
        backgroundColor: bgColor,
        color: color
    }


    return (
        <div className='CreditCard'>
            <div style={divStyle}>
                <img src={image} alt='credit card' />
                <p>{number}</p>
                <div className='date'>
                    <p>Expires {expirationMonth}/{expirationYear}</p>
                    <p>{bank}</p>
                </div>
                <p>{owner}</p>
            </div>
        </div>
    )
}

export default CreditCard