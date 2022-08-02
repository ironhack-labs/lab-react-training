function CreditCard (props) {

    const divStyle = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`,
        height: '10em',
        width: '20em',
        border: '1px solid black',
        margin: '1em',
      };

    let numbers = props.number;
    let hidden = [];

    for (let i=0; i<numbers.length; i++) {
        if(i<12) hidden.push('*')
        else hidden.push(numbers[i])
    }

    return (
        <div style={divStyle} className="CreditCard">
            <p style={{textAlign : 'right'}}>{props.type}</p>
            <p style={{fontSize: '1.2em'}}>{hidden}</p>
            <div style={{fontSize: '0.9em', textAlign : 'left'}}>
                <p>Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
                <p>{props.owner}</p>
            </div>
        </div>
    )
}
export default CreditCard