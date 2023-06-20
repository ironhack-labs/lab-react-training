function CrediCard(props){
    return(
        <div className="CreditCard"
        style={{backgroundColor: props.bgColor, color: props.color}}>
        
            <p>{props.type}</p>
            <p>{props.number}</p>
            <p className="expiration">{props.expirationMonth}/{props.expirationYear}              <p>{props.bank}</p></p>
            <p>{props.owner}</p>
        </div>
    )

}
export default CrediCard