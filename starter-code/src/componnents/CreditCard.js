import React from 'react'

function CreditCard(props) {


    return (
        <div>
        <div style={
            backgroundColor= this.props.bgc,
            color=this.props.colorFuente
        }>
        <div className="type">
        {this.props.tipo === "Visa" && <img src="/img/visa.png" />}
        {this.props.tipo === "Master Card" && <img src="/img/master-card.svg" />}
      </div>
      <div className="number">•••• •••• •••• {this.props.numero.substr(-4)}</div>
      <div className="expires-bank">
        <span>Expires {('0'+this.props.expiraMes).substr(-2)}/{this.props.expiraAnio.toString().substr(2)} </span>
        <span className="bank">{this.props.banco}</span>
      </div>
      <div className="owner">{this.props.nombre}</div>
        </div>
        </div>
    )
}



export default CreditCard

