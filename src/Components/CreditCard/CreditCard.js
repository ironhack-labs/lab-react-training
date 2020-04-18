import React, {Component} from 'react';
import './CreditCard.css'

class CreditCard extends Component {

    selectImage(type){
        let logo = undefined
        switch (type) {
            case "master":
                return logo = "img/master-card.svg"
                break;
            case "visa":
                return logo = "img/visa.png"
                break;
            default:
                break;
        }
    }

    hideNumb(numb){
        let hiddenNum = undefined;
        hiddenNum = "**** ****  "+numb.slice(12,16)
        return hiddenNum
    }

    render(){
        return (
            <div className="credit-card-container" style = {{
                background : this.props.bgColor,
                color: this.props.color,
            }}>
                <div className="credit-card">
                    <img alt={this.props.bank} src ={this.selectImage(this.props.type)}></img>
                    <div className="card-number"> {this.hideNumb(this.props.number)} </div>
                    <div> Expires {this.props.expirationMonth}/{this.props.expirationYear} {this.props.bank}  </div>
                   
                    <div> {this.props.owner} </div>
                </div>
            </div>
        )
    }
}

export default CreditCard;