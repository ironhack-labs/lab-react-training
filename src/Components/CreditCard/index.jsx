function CreditCard(props){
    let typeImage;
    switch(props.type){
        case 'Visa':
            typeImage = 'https://assets.stickpng.com/images/58482363cef1014c0b5e49c1.png'
            break;
        case 'Master Card':
            typeImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png'
            break;
    }
    let month = props.expirationMonth;
    let year = props.expirationYear % 100;
    if(month.length === 1){
        month = `0${props.expirationMonth}`
    }
    const colors = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    };
    function maskCreditCardNumber(creditCardNumber) {
        const numericOnly = creditCardNumber.replace(/\D/g, '');
      
        // Get the last 4 digits
        const last4Digits = numericOnly.slice(-4);
      
        // Group the digits into sets of 4
        const groupedDigits = numericOnly.slice(0, -4).match(/.{1,4}/g) || [];
      
        // Mask the grouped digits with dots
        const maskedGroups = groupedDigits.map(group => '•'.repeat(group.length));
      
        // Combine masked groups and last 4 digits
        const maskedNumber = [...maskedGroups, last4Digits].join(' ');
      
        return maskedNumber;
      }
    return(
        <div className="credit-card" style={colors}>
            <div className="card-image">
                <img src={typeImage}/>
            </div>
            <p className="number">{maskCreditCardNumber(props.number)}</p>
            <div className="bank-date">
                <p>Expires {month}/{year}</p>
                <p>{props.bank}</p>
            </div>
            <p className="owner">{props.owner}</p>
        </div>
    )
}

export default CreditCard