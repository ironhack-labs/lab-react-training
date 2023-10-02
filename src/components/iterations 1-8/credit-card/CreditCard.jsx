function CreditCard(card) {
    const divStyle = { backgroundColor: card.bgColor, color: card.color, width: "315px", height: "165px" };
    const imgStyle = {};
    
    let logo;

    card.type === "Visa" ? logo = "https://logodownload.org/wp-content/uploads/2016/10/visa-logo.png" : logo = "https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-3.png";
    imgStyle.width = card.type === "Visa" ? "45px" : "35px";
    imgStyle.height = "20px";

    return (
        <div className="d-flex flex-column rounded m-2 d-inline-flex" style={ divStyle }>
            <img className="mt-3 me-4 align-self-end" src={logo} style={ imgStyle }/>
            <div className="mt-3 fw-semibold fs-2">•••• •••• •••• { card.number.toString().slice(-4) }</div>
            <div className="d-flex flex-column ms-4 mt-1">
                <div className="d-flex fs-6">
                    <div className="me-3">Expires { card.expirationMonth < 10 ? card.expirationMonth.toString().padStart(2, '0') : card.expirationMonth }/{ card.expirationYear.toString().slice(-2) }</div>
                    <div>{ card.bank }</div>
                </div>
                <div className="align-self-start">
                    <div>{ card.owner }</div>
                </div>
            </div>
        </div>
    )
}

export default CreditCard;