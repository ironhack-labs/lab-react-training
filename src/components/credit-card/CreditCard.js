function CreditCard(type, number, expirationMonth, expirationYear, bank, owner, bgColor, color){

    const card = type

    const cardStyle = {
        backgroundColor: `${card.bgColor}`,
        maxWidth: 300,
    }

    const logoCard = {
        height:20,
    }

    let textColor = {
        color:'white'
    }

    if (card.bgColor === "#eeeeee") {
        textColor.color = 'black'
    }

    let imgLogo = ''
    
    if (card.type === 'Visa'){
        imgLogo = "/img/visa.png"
    } else if (card.type === 'Master Card'){
        imgLogo = "/img/master-card.svg"
    }

    let theExpirationMonth = card.expirationMonth

    if (card.expirationMonth < 10 ){
        theExpirationMonth = card.expirationMonth.toString()  
        theExpirationMonth = '0'+ theExpirationMonth
    }

    const lastNumbers = card.number.slice(-4)
    
    const theExpirationYear = card.expirationYear.toString().slice(2)

    return (
        <div className="col-4">
            <div style={cardStyle} className="card m-2">
                <div className="d-flex flex-row justify-content-end m-2">
                    <img src={imgLogo} alt="visa card" style={logoCard}/>          
                </div>
                <div className="d-flex flex-row justify-content-center ms-2 mt-4">
                    <h3 style={textColor}> ···· ···· ···· {lastNumbers}</h3>
                </div>
                <div className="d-flex flex-column justify-content-start align-items-start m-2 pt-1">
                    <div>
                        <small className="fs-6 me-2" style={textColor}> Expires: {theExpirationMonth}/{theExpirationYear}</small>
                        <small style={textColor}>{card.bank}</small>
                    </div>
                    <small style={textColor}>{card.owner}</small>
                </div>
            </div>
        </div>
    );
}

export default CreditCard;