
const CreditCard = ({ type, number,expirationMonth,expirationYear,owner,bgColor,color}) => {
 const styleBox = {
        backgroundColor: `${bgColor}`,
        width: 500,
     height: 250,
     color:`${color}`,

    }
    
    return (

        <div style={styleBox} className= "driven-license">

            <p> {type} </p>
            <p>{number}</p>

            <p>{expirationMonth}</p>

            <p>{expirationYear}</p>

            <p>{owner}</p>
            <p></p>
            <p></p>

        </div>

    )



}

export default CreditCard 