import React, { Component } from 'react'

export default class
 extends Component {

  hide(n){
    return n.replace(/\d(?=\d{4})/g, "•");
  }

  getImage(type){
    switch (type) {
      case 'Visa':
        return '/img/visa.png'    
      case 'Master Card':
        return '/img/master-card.svg'    
      default:
        break;
    }
  }

  render() {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = this.props
    const style = {
      borderRadius: "3%",
      backgroundColor: bgColor,
      color,
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
      padding: '20px',
      margin: '20px'
    }
    return (
      <div style={style}>
        <div>
          <img style={{width: '50px', float: 'right'}} src={this.getImage(type)} alt=""/>
        </div>
        <p style={{fontSize: '28px', alignSelf: 'center', letterSpacing: '5px'}} >{ this.hide(number) }</p>
        <div style={{display: 'flex'}}>
          <p style={{margin: '0px', fontSize: '10px'}} > Expires { expirationMonth }/{expirationYear}</p>
          <p style={{margin: '0px 0px 0px 26px', fontSize: '10px'}}>{ bank }</p>
        </div>
        <p style={{margin: '0px', fontSize: '15px'}}>{ owner }</p>
      </div>
    )
  }
}
