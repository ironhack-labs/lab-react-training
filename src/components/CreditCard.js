import React from "react"
import "./styles.css"


const CreditCard = (props) => {
    
    var { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    
    return (
        <section>
         <div className="card" style={{backgroundColor: bgColor, borderColor: bgColor}}> 
            <div className="cardAllSections">
            <div className="cardFirstSection">
            {type === "Visa" ? <img className="cardLogo" src="https://image.jimcdn.com/app/cms/image/transf/none/path/s27f25e94a8cbf768/image/if60fd87027ce3708/version/1593145072/image.png" alt="visa"/>
            : <img className="cardLogo" src="https://1000marcas.net/wp-content/uploads/2019/12/logo-Mastercard.png" alt="mastercard"/>}
            </div>
            <div className="cardSecondSection">
                <p style={{color: color}}>●●●● ●●●● ●●●● {number.slice(number.length - 4)} </p>
            </div>
            <div className="cardThirdSection">
                <div className="thirdSection-1">
                    <div>
                        <p style={{color: color}}>Expires</p>   
                    </div> 
                    <div>
                        <p style={{color: color}}>{expirationMonth} / {expirationYear}</p>   
                    </div>
                    <div>
                        <p style={{color: color}}> {bank}</p>   
                    </div>
                </div>
                <div className="thirdSection-2">
                 <div>
                 <p style={{color: color}}>{owner}</p>   
                 </div>
                </div>
            </div>
            </div>
         </div>


        </section>
    )
    
    }
    
    export default CreditCard;
    
    