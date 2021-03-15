import React, {Component} from 'react';
  
 class CreditCard extends Component{
    render() {
        return (
       <div style={{backgroundColor: this.props.bgColor, color: this.props.color}}>
       <ul>
            <li>{this.props.type} </li>
            <li>{this.props.number}</li>
            <li>{this.props.expirationMonth}</li>
            <li>{this.props.expirationYear}</li>
            <li> {this.props.bank}</li>
            <li> {this.props.owner}</li>
       </ul>
        </div>
    )
    }
}
 export default CreditCard;