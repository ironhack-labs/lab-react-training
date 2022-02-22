import visaBank from '../src/assets/images/visa.png'
import masterCardBank from '../src/assets/images/master-card.svg'

function CreditCard(props) {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    let cardType

    if (type === 'Visa') {
        cardType = visaBank
    } else {
        cardType = masterCardBank
    }

    return (

        <div className='creditCard' style={{ backgroundColor: `${bgColor}`, color: `${color}`, width: '50%', textAlign: "center", margin: '10px', padding: '10px', borderRadius: '10px' }}>
            <img src={cardType} />
            <div> {number} </div>
            <div className='expirationDateOwner'> Expires: {expirationMonth}/{expirationYear} <span> </span> {bank}
            </div>
            <div className='expirationDateOwner'> {owner} </div>

        </div>
    )
}

export default CreditCard