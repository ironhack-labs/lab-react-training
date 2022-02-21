
import "./CreditCard.css"


//he intentado hacer lo sigulente, pero no se como va

// function CreditCard({ ...props }) {
///    ....    ////
//         backgroundColor: bgColor,

// no me acepta si está deconstruido


function CreditCard(props) {

    let logo
    const visa = "./visa.png"
    const masterCard = "./master-card.svg"
    //por alguna razon no podía traerlos de la carpeta assets. lo he tenido que mover a public
    props.type === "Visa" ? logo = visa : logo = masterCard


    const cardStyle = {
        backgroundColor: props.bgColor,
        width: "3.37in",
        height: "2.125in",
        borderRadius: "0.125in",
        color: props.color
    }

    function hideNumbers(str) {
        str = [...str]


        const hidden = str.map((elm, idx) => {
            if (idx < 12) {
                elm = "*"
            }
            return elm

        })

        return hidden
    }


    return (

        <figure style={cardStyle}>

            <img className="cardLogo" src={logo} alt={props.type} />

            <h2>{hideNumbers(props.number)}</h2>

            <div className="cardInfo">
                <div className="bankInfo">
                    <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
                    <p>{props.bank}</p>
                </div>
                {props.owner}

            </div>


        </figure>

    )
}




export default CreditCard