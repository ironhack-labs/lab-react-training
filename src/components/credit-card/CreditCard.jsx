
function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    let iconSrc;
    const number4 = number.slice(10, 14)
    if (type === "Visa") {
        iconSrc = "/img/visa.png"
    } else {
        iconSrc = "/img/master-card.svg"
    }
    return (
        <body>
            <div className="container d-flex justify-content-center mt-5">
                <div className="card text-dark"  style={{"background-color": bgColor}} >
                    <div className="text-right image-background mt-4 mb-2" style={{"color": color}}>
                        <div className="px-2"> <img src={iconSrc} width="40" /> </div>
                    </div>
                    <h3 className="d-flex flex-row align-items-center px-2 mt-2">
                        <div className="dots mr-2"> <span></span><span></span><span></span><span></span><span></span> 
                        <span></span><span></span><span></span><span></span><span></span><span></span></div> <span className="number">{number4}</span>
                    </h3>
                    <div className="d-flex justify-content-between align-items-center mt-2 px-2 mb-2 mr-20" > <span>Expires {expirationMonth}/{expirationYear}</span>
                        <span>{bank} </span></div>
                    <div className="d-flex justify-content-between align-items-center mt-2 px-2 mb-2"> <span>{owner}</span></div>

                </div>
            </div>
        </body>
    )
}

export default CreditCard