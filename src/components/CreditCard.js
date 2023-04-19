
function CreditCard(props) {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

    const ccCompany = (type === "Visa" 
            ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png")

    // const ccNumber = number.slice(-4).padStart(16, '*');

    return (
        <div className="credit-card" style={{
            backgroundColor: `${bgColor}`,
            color:`${color}`,
            }}>

            <div>
                <img src={ccCompany} alt="logo" className="credit-card-logo"/>
            </div>

            <div className="credit-card-number" >
            •••• •••• •••• { number.slice(12) }
            </div>

            <div className="credit-card-info">
                <div className="credit-card-expiration" >
                    Expires {expirationMonth}/{expirationYear}   {bank}
                </div>

                <div>
                    {owner}
                </div>
            </div>
        </div>
    );
}

export default CreditCard;