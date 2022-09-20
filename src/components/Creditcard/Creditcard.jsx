function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    let cardStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`,
    }
    function result(type) {
        if (type === 'Visa') {
            return 'Visa'
        } else {
            return 'MarterCard'
        }
    }
    return (
        <div className="card" style={cardStyle}>
            <div className="data-card">
                <p>{number}</p>
                <p><b>Expires:</b> {expirationMonth}/{expirationYear}  {bank}</p>
                <p>{owner}</p>
            </div>
            <div className="img-card">
                <img src={result(type)} alt='' />
            </div>
        </div>
    )
}
export default CreditCard;




/* 

const Creditcard = (props) => {
    console.log(props.type)

    let cardStyle = { backgroundColor: `red`, height: 200, width: 300, borderRadius: 10 }

    return (
        <div className="">
            <div className="random-card" style={cardStyle}>
                <p>{props.expirationMonth}</p>
                <p>{props.expirationYear}</p>
                <p>{props.bank}</p>
                <p>{props.owner}</p>
            </div>
        </div>
    );
};


export default Creditcard;

 */