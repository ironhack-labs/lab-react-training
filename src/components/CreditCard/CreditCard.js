import "./CreditCard.css"
import { Component } from "react"


class CreditCard extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        const src = (type) => {
            if (type == "Visa") {
                return "/img/visa.png"
            } else {
                return "/img/master-card.svg"
            }
        }

        return (
            <div className="card" style={{backgroundColor: this.props.bgColor}}>
                <div className="logoDiv">
                    <img className="logo" src={src(this.props.type)}/>
                </div>
                <div>
                    <span className="dot" style={{backgroundColor: this.props.color}}></span>
                    <span className="dot" style={{backgroundColor: this.props.color}}></span>
                    <span className="dot" style={{backgroundColor: this.props.color}}></span>
                    <span className="dot space" style={{backgroundColor: this.props.color}}></span>
                    <span className="dot" style={{backgroundColor: this.props.color}}></span>
                    <span className="dot" style={{backgroundColor: this.props.color}}></span>
                    <span className="dot" style={{backgroundColor: this.props.color}}></span>
                    <span className="dot space" style={{backgroundColor: this.props.color}}></span>
                    <span className="dot" style={{backgroundColor: this.props.color}}></span>
                    <span className="dot" style={{backgroundColor: this.props.color}}></span>
                    <span className="dot" style={{backgroundColor: this.props.color}}></span>
                    <span className="dot space" style={{backgroundColor: this.props.color}}></span>
                    <span className="number" style={{color: this.props.color}}>{this.props.number?.[12]}</span>
                    <span className="number" style={{color: this.props.color}}>{this.props.number?.[13]}</span>
                    <span className="number" style={{color: this.props.color}}>{this.props.number?.[14]}</span>
                    <span className="number" style={{color: this.props.color}}>{this.props.number?.[15]}</span>
                </div>
                <div className="infoDiv">
                    <p id="expire" style={{color: this.props.color}}>Expires {this.props.expirationMonth}/{this.props.expirationYear} <span>{this.props.bank}</span></p>
                    <p id="owner" style={{color: this.props.color}}>{this.props.owner}</p>
                </div>
            </div>
        )
    }
}

export default CreditCard