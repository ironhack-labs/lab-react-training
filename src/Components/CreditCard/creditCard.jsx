
function CreditCard(props){
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
    return(
        <div >
            <img src="../../assets/images/visa.png" alt="" />
            <p>{bank}</p>
            <p>{number}</p>
            <p>Expires {expirationMonth}/{expirationYear}</p>
            <p>{owner}</p>
            <p>{type}</p>
        </div>
    );
}

export default CreditCard;