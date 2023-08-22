function CreditCard (props){

    const {type, number,expirationMonth, expirationYear, bank, owner, bgColor, color} = props;

    const cardStyle = {
        backgroundColor: bgColor,
        color: color
    };

    let hiddenArr = [];
    function hideNumber (hiddenArr) {
        for (let i = 0; i< number.length; i++){

            if(i < number.length-5){
                hiddenArr.push("*");
            }
            else {
                hiddenArr.push(number[i]);
            }
        }
        hiddenArr.join ("");
        return hiddenArr;
    }

    return(
        <div style={cardStyle} className="card" >
            <div className="card-logo">
            {type}
            </div>
            <div className="card-number">
            <p>{hideNumber(hiddenArr)}</p>
            </div>
            <div className="card-bottom-details">
                <div className="expiration-details">
                <p>Expires {expirationMonth}/{expirationYear}</p>
                <p>{bank}</p>
                </div>
                <p>{owner}</p>
            </div>
        </div>

    )
}

export default CreditCard;