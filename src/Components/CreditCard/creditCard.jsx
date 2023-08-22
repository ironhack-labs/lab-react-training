import visa from '../../assets/images/visa.png'

function CreditCard(props){
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
    return(
        <div >
            <img src={visa} alt="" width="50" height="50"/>
            <p>{bank}</p>
            <p>{number}</p>
            <p>Expires {expirationMonth}/{expirationYear}</p>
            <p>{owner}</p>
            <p>{type}</p>
        </div>
    );
}

export default CreditCard;