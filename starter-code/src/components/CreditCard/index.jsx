import React, { Component } from 'react';

const VISA_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Visa_2014_logo_detail.svg/1200px-Visa_2014_logo_detail.svg.png';
const MASTERCARD_URL = 'https://vallenevado.com/wp-content/uploads/2017/07/mc_vrt_rgb_pos.png';

class CreditCard extends Component {

  render() {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = this.props;
    let imgCard = '', digitsNumber = number.substring(12), digitsYear = expirationYear.toString().substring(2),
    expMonth = '';
    (expirationMonth >= '1' && expirationMonth <= '9') ? expMonth += '0' + expirationMonth : expMonth = expirationMonth;
    (type === 'Visa') ? imgCard = VISA_URL : imgCard = MASTERCARD_URL;
    const style = {
      backgroundColor: `${bgColor}`,
      color: `${color}`,
      height: '200px',
      width: '370px',
      borderRadius: '25px'
    }
    const styleImage = {
      backgroundImage: `url(${imgCard})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      alignSelf: 'flex-end'
    }

    return (
      <div className="creditCard">
        <div style={style}>
          <div style={styleImage}></div>
          <div>
            <p id="account">**** **** **** {digitsNumber}</p>
            <p>Expires {expMonth}/{digitsYear}        {bank}</p>
            <p>{owner}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CreditCard;