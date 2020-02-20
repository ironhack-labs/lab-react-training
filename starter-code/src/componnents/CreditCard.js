import React from 'react'

const  CreditCard= (props) => {
  let typo = {
    visa:"Visa",
    masterCard:"Master Card"
  }


    return (
      <div className="targetaCredito" style={
      {  backgroundColor:props.bgc,
        color:props.colorFuente,
        width:"27vw",
        height:"30vh",
        margin:"3%",
        borderRadius:"15px",
        display:"inline-block"

        }
      }>
          <img src={props.tipo === "Visa"? "./img/visa.png": "./img/master-card.svg"} style={{
            width:"15% ",
            position:"relative",
            left:"75%",
            top:"30px"

          }}/>

        <p style={{
          margin:"10% auto 5%",
          fontSize:"2.5rem",
          textAlign:"center"
          
        }}>•••• •••• •••• {props.numero}</p>
        <p style={{
          paddingLeft:"10%",
          margin:"0",
          display:"inline-block"
        }}>Expira 0{props.expiraMes}/{props.expiraAnio}</p>
        <p style={{
          paddingLeft:"10%",
          margin:"0",
          display:"inline-block"
        }}>{props.banco}</p>
        <p
        style={{
          paddingLeft:"10%",
          margin:"5% 0",
        }}
        >{props.nombre}</p>

        </div>
    )
}



export default CreditCard

