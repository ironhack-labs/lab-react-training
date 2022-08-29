import './CreditCard.css'

function CreditCard ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){
  
  function Month(month) {
    return (month < 10) ? '0' + month.toString() : month.toString();
  }

  function TypeCard (card) {
      if (card === 'Visa'){
        return 'https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/visa.png'
      } else if (card === 'Master Card') {
        return 'https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/master-card.svg'
      }
  }

  const getMaskedNumber = (numberCard) => {
    const endDigits = numberCard.slice(-4);
    return endDigits.padStart(numberCard.length, '*');
}
      
    
  return(
    <div className=' m-2 credit-box' style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
      <div className='type d-flex flex-row-reverse'> <img className='img-type' src= {TypeCard(type)} alt="" /></div>
      <div className='number'>{ getMaskedNumber(number) }</div>
      <div className='expires-bank'>Expires {Month(expirationMonth)}/{expirationYear} <span className='bank'>{ bank }</span> </div>
      <div className='owner'>{ owner }</div>
    </div>
  )
};

export default CreditCard;