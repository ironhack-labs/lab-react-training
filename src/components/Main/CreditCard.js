function CreditCard(props) {
    return (
        <div style={{
            backgroundColor: `${props.bgColor}`,
            color: `${props.color}`
            }} className="CreditCard">
            <h3>{props.type}</h3>
            <>
            <p>{props.number}</p>
            <p>{props.expirationMonth}</p>
            <p>{props.expirationYear}</p>
            </>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
            <p>{props.bgColor}</p>
            <p>{props.color}</p>
        </div>
    )
}

export default CreditCard
