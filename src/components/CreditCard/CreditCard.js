import './CreditCard.css'

const CreditCard = (props) => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    const divStyle = {
        backgroundColor: ` ${bgColor}`,
        color: `${color}`
    }
    return (

        <article className="creditCard" style={divStyle}>

            <p> {type}</p>
            <p> {number}</p>
            <p> {expirationMonth} {expirationYear}</p>
            <p> {bank}</p>
            <p> {owner}</p>

        </article>

    )
}

export default CreditCard