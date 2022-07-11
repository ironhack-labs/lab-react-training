const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {


    return (
        <article style={{ backgroundColor:  bgColor  }}>
            <h5>{type}</h5>
            <h3 style={{ color: 'red' }}>{number}</h3>
            <p>expires in {expirationMonth}/{expirationYear}    {bank}</p>
            <p>{owner}</p>
        </article>
    )
}

export default CreditCard