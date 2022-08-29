import './CreditCard.styles.css'

const flags = [
 { type: "Visa",
   img: "https://png.vector.me/files/images/7/1/715862/visa_logo.jpg"
 },
 { type: "MasterCard",
   img: "https://png.vector.me/files/images/9/9/99813/mastercard_logo.jpg"
 }, 
 { type: "AmericanExpress",
   img: "https://png.vector.me/files/images/9/9/99813/mastercard_logo.jpg"
 }
]


export const CreditCard = (props) => {
 const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props


 const myFlag = () => {
  const aboutFlag = flags.filter((flagType) => flagType.type === type)

  return aboutFlag[0].img
 } 

 const convertToNumber = () => {
  const listNumber = number.split(" ").reverse()
  return listNumber[0]
 }

 return(
  <>
   <div className="creditCard" style={{backgroundColor: bgColor, color: color }}>
    <span>
     <div className='flagDiv'> 
      <img src={myFlag()} alt={`Flag to ${type}`} />
     </div>
     <div className='numberDiv'>
      <p>**** **** **** {convertToNumber()}</p>
     </div>
     <div className='nameAndExpires'>
      <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
      <p>{owner}</p>
     </div>

    </span>
   </div>
  </>
 )

}