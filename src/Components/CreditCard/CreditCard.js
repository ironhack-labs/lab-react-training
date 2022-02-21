import VisaImg from '../../assets/images/visa.png'
import MasterCardImg from '../../assets/images/master-card.svg'

    const CreditCard = props => {

        const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

        const divStyle = {
            backgroundColor: `${bgColor}`,
            color: `${color}`
        }

        let image = ''

        if (type === 'Master Card') {
            image = MasterCardImg
        } else if (type === 'Visa') {
            image = VisaImg
        }

        return (
            <div style={divStyle}>
                <img src={image} alt={type}></img>
                <p>{type}</p>
                <p>{number}</p>
                <p>{expirationMonth}/{expirationYear}</p>
                <p>{bank}</p>
                <p>{owner}</p>
            </div>
        )

    }
export default CreditCard