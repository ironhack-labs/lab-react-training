import logoVisa from '../../assets/images/visa.png'
import logoMasterCard from '../../assets/images/master-card.svg'
import './CreditCard.css'



const CreditCard = props => {
    const { dataCreditCard } = props;
    return (
          <div className='card mb-3 mt-4 mx-2'style={{width:450,height:180,backgroundColor: dataCreditCard.bgColor, color : dataCreditCard.color}}>
            <div className="row g-0 my-2 mx-2 " >
              <div className='d-flex flex-row-reverse justify-content-end mt-2 px-2' >
              <img  style={{height:25}}src={dataCreditCard.type==='Visa' && logoVisa || dataCreditCard.type==='Master Card' && logoMasterCard}></img>
                <div className="card-body text-start "> 
                <br/>
                <h2> •••• •••• •••• {dataCreditCard.number.slice(-4)}</h2>
                <span> Expires {dataCreditCard.expirationMonth}/{dataCreditCard.expirationYear} &nbsp;&nbsp;&nbsp;&nbsp; </span>
                <span >{dataCreditCard.bank}</span> 
                <p >{dataCreditCard.owner}</p>
              </div>    
                </div>
              </div>
            </div>
    );
};


export default CreditCard



