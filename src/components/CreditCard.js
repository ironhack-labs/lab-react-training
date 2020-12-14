//Paso I:Importaciones
import { render } from '@testing-library/react'
import React, {Component} from 'react'
import '../css/App.css'



//Paso II: Clases o Funciones 

class CreditCard extends Component {
    

    getTypeCard(type) {
        switch (type) {
            case 'Visa':
                return './img/visa.png';
            case 'Master Card':
                return './img/master-card.svg';
        }
    }

    getCreditNum(number) {
        const lastFour = number.slice(-4);
        return `●●●● ●●●● ●●●● ${lastFour}`;
    }

    getTwoDigits(number) {
        return number.length == 1 ? "0" + number : number;
    }

    render({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}=this.props) {

    const divStyle ={
        backgroundColor: bgColor,
        color: color
    }

        const imgUrl = this.getTypeCard(type);
        const creditNumber = this.getCreditNum(number)
    return (
    
        <div className='creditCarCont' style={divStyle}>
            <div className='creditLogo'>
                <img src={imgUrl} />
            </div>
            <p className='pCreditNumber'> {creditNumber} </p>
            <div className="infoCard">
            <p> Expires {expirationMonth}/{expirationYear}     {bank} </p>
            <p> {owner} </p>
            </div>
        </div>
    
        
    )}
}

//Paso III:Exportaciones
export default CreditCard;