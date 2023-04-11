
function CreditCard(props) {
const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

const ccCompany = (type == "Visa" 
            ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png")


            const imgStyle = {
                width: "20%",
                height: "auto",
            }

            const divStyle = {
                backgroundColor: bgColor,
                margin: "10vh auto",
                padding: "5vw",
                borderRadius: "10px",
                width: "31%",
                position: "relative",
            }

            const nameStyle = {
                position: "absolute",
                bottom: "5%",
                left: "5%",
                fontSize: "1.5vw",
                color: color,
            }

            const imgDivStyle = {
                position: "absolute",
                top: "5%",
                right: "5%",
            }

            const numberStyle = {
                fontSize: "3vw",
                color: color,
                letterSpacing: "0.3vw",
                marginBottom: "3vw",
            }

return (
    <div style={divStyle}>
    <div>

         <div style={imgDivStyle}>
            <img style={imgStyle} src={ccCompany}/>
         </div>
         <div style={numberStyle} >
                •••• •••• •••• { number.slice(12) }
            </div>
            <div style={nameStyle}>
                Expires { `${expirationMonth}`.padStart(2, '0') }/{`${expirationYear}`.slice(2)} {bank} <br /> {owner}

            </div>
    </div>
    
    </div>
)
}

export default CreditCard