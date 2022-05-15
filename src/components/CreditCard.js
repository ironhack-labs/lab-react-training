export default function CreditCard(props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
    let path;
    const renderLogoTypeCard = () => {
        type === "Visa" ? path = "/visa.png" : path = "/master-card.svg";
        return path;
    }
    const renderCardnumber = () => {
        return "•••• •••• •••• " + number.slice(-4)
    }

    return (
        <div>
            <section className="credit-card" style={{ backgroundColor: bgColor, color: color }}>
                <div><img src={renderLogoTypeCard()} alt={type} /></div>
                <h1>{renderCardnumber()}</h1>
                <div className="flex-row">
                    <p>Expires {expirationMonth}/{expirationYear}</p>
                    <p>{bank}</p>
                </div>
                <p>{owner}</p>
            </section>
        </div>
    )

}