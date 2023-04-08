const CreditCard = (props) => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props

    const ccCompany = (type === "Visa"
            ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png")

    return (
        <div className="cc-card d-flex flex-column p-4">
            <div className="row justify-content-end cc-brand">
                <img src={ccCompany} alt=""/>
            </div>
            <div className="row justify-content-center cc-number">
                •••• •••• •••• { number.slice(12) }
            </div>
            <div className="row cc-details">
                Expires { `${expirationMonth}`.padStart(2, '0') }/{`${expirationYear}`.slice(2)} {bank} <br /> {owner}

            </div>
        </div>
    )

}

export default CreditCard