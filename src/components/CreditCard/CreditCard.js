import './CreditCard.css'

const CreditCard = (props) => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color,} = props
    let style = { backgroundColor: `${bgColor}`, color: `${color}` };

    return (
        <article className="CreditCard" style={style}>
            <div className="logo">{type}</div>
            <div className="creditNumber">
                <p>********{number.slice(-4)}</p>
            </div>
            <footer>
                <div className="creditCardFooter">
                    <p>
                        Expires {expirationMonth}/{expirationYear} {bank}
                    </p>
                    <p>{owner}</p>
                </div>
            </footer>
        </article>
    )
}

export default CreditCard

