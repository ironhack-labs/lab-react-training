import React, {Component} from "react"

class CreditCard extends Component{
  render(){
    let num = this.props.number.slice(12,16)
    const style = { backgroundColor : `${this.props.bgColor}`, color:`${this.props.color}`}
    let image = ""
    if(this.props.type === "Visa"){
      image = "/img/visa.png"
    }else if(this.props.type === "Master Card"){
      image = "/img/master-card.svg"
    }
    return(
      <div className="creditCard" style={style}>
        <div className="type">
          <img src={image}/>
        </div>
        <div className="left number">
          <span>**** **** **** {num}</span>
        </div>
        <div className="left">
          <span>Expires {this.props.expirationMonth} / {this.props.expirationYear %100}</span>
          <span> {this.props.bank}</span>
        </div>
        <div className="left">
          <span>{this.props.owner}</span>
        </div>
      </div>
    )
  }
}

export default CreditCard