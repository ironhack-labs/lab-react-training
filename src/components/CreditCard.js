import React from 'react';
import './CreditCard.css';
import visaImg from '../img/visa.png';
import masterImg from '../img/master-card.svg';

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) =>{

    const divStyle = {
        background: `${bgColor}`,
    };
    
    const pStyle = {
        color: `${color}`,
    };
    const nrVisual = number.substr(12,4);

    const pegaImg = () =>{
        let imgCart = ''; 
        if (type === "Visa"){
            imgCart = visaImg;
        }else {
            imgCart = masterImg;
        }
        return imgCart;
    }

    const getExpDate = (month, year) =>{

        let monthYear = '';
        if (month < 10) {
            monthYear = '0' + month;
        } else {
            monthYear = month;
        }

        monthYear += '/' + year.toString().substr(2,2);
        return monthYear;
    };

    return (
        <div class="CreditCard" style={divStyle}>
            <img src={pegaImg()} alt="Imagem" />
            <p style={pStyle}>.... .... .... {nrVisual} </p>
            <p style={pStyle}>Expires {getExpDate(expirationMonth, expirationYear)}   {bank} </p>
            <p style={pStyle}>{owner}</p>
        </div>
    );
};

export default CreditCard;
