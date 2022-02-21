const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    return (
        <article className="CreditCard" style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
            <p>{type}</p>
            <p>{number}</p>
            <p>{expirationMonth}/{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </article>
    )
}


export default CreditCard