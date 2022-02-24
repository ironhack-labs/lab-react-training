import React from 'react'
export default function CreditCard(props) {
  
  const divStyle = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
    width: '30%',
    heigth: '20vw',
    padding: '20px',
    marginBottom : '5px'
  };
  
  
  let img = '';
  if(props.type === "Visa"){
    img = './assets/images/visa.png'
  }else{
    img = './assets/images/master-card.svg'
  }

  function cardHide(card) {
    let hideNum = [];
  	for(let i = 0; i < card.length; i++){
      if(i < card.length-4){
        hideNum.push("*");
      }else{
        hideNum.push(card[i]);
      }
    }
    return hideNum.join("");
  }
  let hide = cardHide(props.number)
  
  return (
    <div style={divStyle}>
        <img src={img} alt="" />
        <p>{hide}</p>
        <p>Expires: {props.expirationMonth}/{props.expirationYear} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.bank} </p>
        <p>{props.owner}</p>
        
    </div>
  )
}
  
