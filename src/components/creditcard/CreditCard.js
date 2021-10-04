import React from 'react'; 

const CreditCard = props => {
    let type = props.type;
    function makeCCNumber(num){
        let arr = num.split('')
        for (let i = 0; i < num.length - 4 ; i++) {
        arr.splice(i, 1, '*' )
        }
        return arr.join('')
    }
    let number = props.number;
    let expirationMonth = props.expirationMonth;
    let expirationYear = props.expirationYear;
    let bank = props.bank;
    let owner = props.owner;
    let bgColor = props.bgColor;
    let color = props.color;
    let creditCard = {
        backgroundColor: `${bgColor}`,
        color,
        width: "400px",
        height: "200px",
        margin: "auto",
        borderRadius: "5px",
    }

    return(
        <div style={creditCard}>
                <div>
                    {type}
                    <br/>
                    {makeCCNumber(number)}
                    <br/>
                    Expires {expirationMonth}/{expirationYear} {bank}
                    <br />
                    {owner}
                </div>
        </div>
    )
    
}

export default CreditCard;