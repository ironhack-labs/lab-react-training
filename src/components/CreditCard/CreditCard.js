import "./CreditCard.css"

const CreditCard = ({ 
    type, 
    number, 
    expirationMonth, 
    expirationYear, 
    bank, 
    owner, 
    bgColor, 
    color}) => {

        let divStyle = {backgroundColor: `${bgColor}`, color: `${color}`}


        return (
            <figure style={divStyle}>
                <p>{type}</p>
                <p>********{number.slice(-4)}</p>
                <p>Expiration {expirationMonth}/{expirationYear}</p>
                <p>{bank}</p>
                <p>{owner}</p>
            </figure>
        )
    }







export default CreditCard


// type="Visa"
//       number="0123456789018845"
//       expirationMonth={3}
//       expirationYear={2021}
//       bank="BNP"
//       owner="Maxence Bouret"
//       bgColor="#11aa99"
//       color="white" 