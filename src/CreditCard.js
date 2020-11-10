import React, { Component } from 'react'

export class CreditCard extends Component {
    render() {
        let imgPath = this.props.type === 'Visa'? './img/visa.png' : './img/master-card.svg'
        let protectedNum = this.props.number.split('').map((n, i)=>i<12? '*' : n).map((n,i)=>i%4===0?' '+n:n).join('');
        let month =  this.props.expirationMonth.toString().length === 1 ? '0'+this.props.expirationMonth : this.props.expirationMonth
        let year = this.props.expirationYear.toString().split('').splice(2).join('')
        return (
            <div className='borderWrapper' style={{backgroundColor: this.props.bgColor}}>
                <div><img className='logo' src={imgPath} alt = {this.props.type}/></div>
                <div><p>{protectedNum}</p></div>
                <div><p>Expires {month}/{year}</p><p>{this.props.bank}</p></div>
                <p>{this.props.owner}</p>
            </div>
        )
    }
}

export default CreditCard
