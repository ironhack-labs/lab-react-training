function CreditCard (props) {

    const divStyle = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`,
        height: '10em',
        width: '20em',
        border: '1px solid black',
        margin: '1em',
      };

    return (
        <div style={divStyle} className="CreditCard">
            <p>{props.type}</p>
            <p>{props.number}</p>
            <div style={{fontSize: '1em'}}>
                <p>Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
                <p>{props.owner}</p>
            </div>
        </div>
    )
}
export default CreditCard