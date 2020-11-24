const CreditCard = (props) => {
    let imgCard;
    if(props.type=="Visa"){
        imgCard = "./img/visa.png"
    }else{
        imgCard = "./img/master-card.svg"
    }

    return  <div className="div-creditcard" 
    style={{ backgroundColor: props.bgColor, color: props.color }}>
        <img className="credit-img" src={imgCard}></img>
        <p>{props.number}</p>
<p>Expires {props.expirationMonth}/{props.expirationYear}   {props.bank}</p>
<p>{props.owner}</p>
</div>;
}

export default CreditCard