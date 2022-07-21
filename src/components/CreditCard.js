function CreditCard(props) {


    const divStyle = {
        backgroundColor: props.bgColor,
     color:props.color}

    let lastFour = props.number.slice(12,16);
return (
    <div className="creditCard" style={divStyle}>
        {/* <div style ={divStyle}> */}
        <p> {props.type}</p>
        <p> **** **** **** {lastFour}</p>
        <p> {props.expirationMonth}/{props.expirationYear}</p>
        <p> {props.bank} </p>
        <p> {props.owner} </p>
    </div>
)
}

export default CreditCard;

