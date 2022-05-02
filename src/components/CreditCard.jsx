import './CreditCard.css'

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

    let vNumbers = number
    vNumbers = number.slice(12, 16)
    if (expirationMonth < 10) expirationMonth = "0" + expirationMonth
    let cardHtml
    type == "Visa" ? cardHtml = <i className="fa fa-cc-visa"></i> : cardHtml = <i className="fa fa-cc-mastercard"></i>
    return (
        <div className="creditCard" style={{
            backgroundColor: `${bgColor}`,
            color: `${color}`
        }}>
            <div className="cardIcon">
                {cardHtml}
            </div>
            <div className="cardNumber">
                <i className=" fa fa-circle"></i>
                <i className=" fa fa-circle"></i>
                <i className=" fa fa-circle"></i>
                <i className=" fa fa-circle"></i>
                &nbsp;&nbsp;
                <i className=" fa fa-circle"></i>
                <i className=" fa fa-circle"></i>
                <i className=" fa fa-circle"></i>
                <i className=" fa fa-circle"></i>
                &nbsp;&nbsp;
                <i className=" fa fa-circle"></i>
                <i className=" fa fa-circle"></i>
                <i className=" fa fa-circle"></i>
                <i className=" fa fa-circle"></i>
                &nbsp;&nbsp;
                {vNumbers}
            </div>       
            <div className="cardInfo">
                <p>Expires {expirationMonth}/{expirationYear}</p>
                <p>{bank}</p>
            </div>
            
            <p>{owner}</p>


        </div>


    )
}


export default CreditCard