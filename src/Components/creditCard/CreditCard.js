
import './creditcard.css'
import '../../assets/images/visa.png'
import '../../assets/images/master-card.svg'

const CreditCard = (props) => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    const divStyle = {
        background: `${bgColor}`,
        color: `${color}`
    }


    return (
        <article>
            <div style={divStyle} className='credidCard'>
                <p>{type}</p>
                <p>{number}</p>
                <p>{expirationMonth}/{expirationYear}{bank}</p>
                <p>{owner}</p>

            </div>
        </article>
    )
}
export default CreditCard