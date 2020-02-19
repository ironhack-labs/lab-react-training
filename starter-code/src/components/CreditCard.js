import React, { Component } from 'react'

export default class CreditCard extends Component {
    GiveMyLogo=(x)=>{
        const {type}=x
        if(type==='Visa')
        return ('../img/visa.png')
        return ('../img/master-card.svg')
    }
    render() {
        return (
            <div className="CreditCard" style={{
                background:`${this.props.bgColor}`,
                color:`${this.props.color}`, 
                }}>
                <div className="topCC">
                <img src={this.GiveMyLogo(this.props)} alt="logo"></img>
                </div>
                <div className="middleCC">
                <h2 className="dotsCC">&#xB7;&#xB7;&#xB7;&#xB7; &#xB7;&#xB7;&#xB7;&#xB7; &#xB7;&#xB7;&#xB7;&#xB7;</h2>
                <h2 className="numCC"> 
                {
                    (()=>{
                        const num=this.props.number.substr(12,4)
                        return num
                    })()
                }</h2>
                </div>
                <div className="bottomCC">
                <span>Expires {this.props.expirationMonth}/{this.props.expirationYear}</span>
                <span className="bankCC">{this.props.bank}</span>
                <p>{this.props.owner}</p>
                </div>
            </div>
        )
    }
}
