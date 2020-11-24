import React from 'react';
const Credit= (props) => {
     const numb =(numbers)=>{
        return numbers.slice(12, 16)
    }

    return (
        <div className="card-container" style={{
            backgroundColor: props.bgColor,
            color: props.color,
            fontSize: 30,
          }}>

        <div className="type-card">
       <p>{props.type==='Visa'&&<img src='/img/visa.png' className="img-card"/>}</p>
        <p>{props.type==="Master Card" && <img src="/img/master-card.svg" className="img-card"/>}</p>
        </div>
        <div className="content-card">
        <p> **** **** ****  **** {numb(props.number)} </p>
           <p> {props.expirationMonth}/{props.expirationYear} {props.bank} </p>
        </div>
        </div>
    )
}

     


export default function CreditCard(){
    return (
        <div>
        <Credit 
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />
        <Credit
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" />
        <Credit
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" />
            
        </div>
    )
}