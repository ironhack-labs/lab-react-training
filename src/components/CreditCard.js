function CreditCard(props){
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
    const divStyle = {
    backgroundColor: `${bgColor}`,
    color: `${color}`
  };
     return( 
        <div className="CreditCard"  style={divStyle}>
      {type},{number},Expires:{expirationMonth}/{expirationYear},{bank},{owner}
    </div>
    );

}
export default CreditCard;