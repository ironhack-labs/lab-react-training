import './CreditCard.css'

const CreditCard = props => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    const hasCard = `**** **** **** ${number[12]}${number[13]}${number[14]}${number[15]}`

    return (
        <div className='CreditCard' style={{ backgroundcolor: `${bgColor}`, color: `${color}` }} >
            <h3> Type {type}</h3>
            <p>number{hasCard}</p>
            <p>Expiration Year{expirationYear}</p>
            <p> Owner{owner}</p>
            <p> Bank{bank}</p>
        </div>
    )

}
export default CreditCard