function CreditCard (props){

    const {type, number,expirationMonth, expirationYear, bank, owner, bgColor, color} = props;

    const cardStyle = {
        backgroundColor: bgColor,
        color: color
    };

    let hiddenArray = [];
    function hideNumber (hiddenArray) {
        for (let i = 0; i< number.length; i++){

            if(i < number.length-5){
                hiddenArray.push("*");
            }
            else {
                hiddenArray.push(number[i]);
            }
        }
        hiddenArray.join ("");
        return hiddenArray;
    }

    return(
        <div style={cardStyle} className="card" >
            <div className="card-logo">
            {type}
            </div>
            <div className="card-number">
            <p>{hideNumber(hiddenArray)}</p>
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