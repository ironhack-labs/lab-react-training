const CreditCard = (props) => {
    const dot = "•"
    const lastNumbers = props.number.substring(props.number.length - 4)
    const printedNumber = dot.repeat(4) + " " + dot.repeat(4) + " " + dot.repeat(4) + " " + lastNumbers
    let displayedMonth;
    let displayedYear;

    if (String(props.expirationYear).length > 2){
        const yearToString = String(props.expirationYear)
        displayedYear = yearToString.substring(yearToString.length - 2)
    } else {displayedYear = props.expirationYear}

    if (String(props.expirationMonth).length < 2){
        const monthToString = String(props.expirationMonth)
        displayedMonth = "0"+monthToString
    } else {displayedMonth = props.expirationMonth}

    console.log()

    return(
        <div className="credit-card" style= {{backgroundColor: props.bgColor }}>
            <div className="logo-container">
                {props.type === "Visa" && 
                <img className="card-logo" src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="visa" />}
                {props.type === "Master Card" && 
                <img className="card-logo" src="https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png" alt="master-card" />}
            </div>
            <div className="card-number">
                <p style= {{color: props.color}}>{printedNumber}</p>
            </div>
            <div className="card-info">
                <div>
                    <p style= {{color: props.color}}>Expires {displayedMonth}/{displayedYear}</p>
                    <p style= {{color: props.color}}>{props.bank}</p>
                </div>
                <div>
                    <p style= {{color: props.color}}>{props.owner}</p>
                </div>
            </div>
        </div>
    )
}

export default CreditCard