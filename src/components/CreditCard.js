import visaImg from '../assets/images/visa.png'
import masterCard from '../assets/images/master-card.svg'


const CreditCard = props => {

const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props
const numSecret = "**** **** ****" + number[12] + number[13] + number[14] + number[15] 



 let typeCard = ""

if (type === "Master Card") {
typeCard = masterCard
} else {
    typeCard = visaImg
}

const styles = {
    backgroundColor: bgColor,
    color: color,
    width: "33%",
    borderRadius: "12px",
    display: "inline-block"

}

const imgStyle = {
    width: "20px"
}
    return (<>



<div style={styles}>
<p><img src={typeCard} style={imgStyle}></img></p>
<p>{numSecret}</p>
<p>
<span>Expires {expirationMonth}/{expirationYear} {bank}</span>
</p>
<p>{owner}</p>

</div>





    </>)
}


export default CreditCard;