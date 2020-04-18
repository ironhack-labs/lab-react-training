import React, {Component} from 'react'
import '../creditCard/CreditCard.css'


class CreditCard extends Component {
  hideNumbers(number){
    const array = number.split('')
    const numbers = array.splice(11, 4)
    array.forEach((item, index)=>{
      return array[index] = '*';
    })
    const hideNumbers = array.join('')
    console.log(hideNumbers)
    const showNumbers= numbers.join('')
    console.log(showNumbers)
    return (hideNumbers + showNumbers)
  }

  style(bgColor, color){
    const style = { 
      display: 'flex',
      flexDirection: 'column',
      background: `${bgColor}`,
      color: `${color}`,
      border: 'radius 1px', 
      borderRadius: '0.2em',
      fontSize: '30px',
      margin: '20px 30px',
      textAlign: 'center',
      padding: '30px',
      width: '370px',
      height: '140px',
  };
  return style
  }
  render(){
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = this.props

    return(
      <div style={this.style(bgColor, color)} className="creditCard">
        <p className="type">{type}</p>
        <p className="number">{this.hideNumbers(number)}</p>
        <div className="leftSide">
          <div className="expire">
            Expires {expirationMonth}/{expirationYear} {bank}
          </div>
          <p className="name">{owner}</p>
        </div>

      </div>
    )
  }
}



export default CreditCard