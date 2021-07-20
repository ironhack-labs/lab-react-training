import { Component } from "react";
import visa from'./images/visa.png'
import './creditcard.css'
import LogoMastercard from './images/master-card.svg'




class Creditcard extends Component {
  render(){
    const replaceNumber = this.props.number.replace(/[0-9](?=([0-9]{4}))/g, '•').replace(/(.{4})/g, '$1 ')
    return(
      <div className = 'card-div' style ={{backgroundColor: this.props.bgColor, width: '300px', height: '150px', marginLeft: '10px', marginBottom: '10px'}}>
        <div>
          <img className = 'logo-cartao' src = {this.props.type}></img>
        </div>
        
          <span style = {{color: this.props.color}} className = 'number-card'>{replaceNumber}</span>
        
        <div className = 'card-details-user' style = {{color: this.props.color}}>
          <span className = 'card-details-month'>Expires {this.props.expirationMonth}/</span><span className = 'card-details-year'>{this.props.expirationYear}</span> <span className = 'card-details-bank'> {this.props.bank} </span>
          <p className = 'card-details-owner'>{this.props.owner}</p>
        </div>
      </div>
    )
  }
}


export default Creditcard