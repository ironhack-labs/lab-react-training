import React from 'react'
import visaPic from '../../assets/images/visa.png';
import masterPic from '../../assets/images/master-card.svg';

// export default function CreditCard({type,number,expirationMonth,expirationYear,bank,owner,bgColor,color,}) {

//     return (
//             <div id="con" className="rectangle">

//                 <div className="card-num">
//                     <span> {props.theCard.number}</span>
//                 </div>
//                 <div className="card-info">
//                     <span>Expired {props.theCard.expirationMonth}/{props.theCard.expirationYear}</span>
//                     <span>{props.theCard.bank}</span>
//                 </div>
//                 <div className="card-holder">
//                     <span>{props.theCard.owner}</span>
//                 </div>

//             </div>
//     )
// }

export default function IdCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color, }) {
    let logo = '';

    switch (type) {
        case 'Visa':
            logo = visaPic;
            break;
        case 'Master Card':
            logo = masterPic;
            break;
    }


    // function getCardNum(cardNum) {
    //     if (cardNum.length < 5) {
    //         return cardNum
    //     }
    //     const front = cardNum.slice(0, cardNum.length - 4)
    //     const length = front.length
    //     const back = cardNum.slice(cardNum.length - 4)
    //     return (
    //         front.replace(front, '●'.repeat(length)) + back
    //     )
    // }


    let cardNum = '●'.repeat(number.slice(0, -4).length) + number.slice(-4);



    return (
      
            <div className="rectangle" style={{ backgroundColor: `${bgColor}` }} >
                <div style={{ color: `${color}` }}>

                    <img src={logo} alt="bank logo" className="bank-logo" />

                    <div className="card-num">
                        {cardNum.slice(0, 4)}   {cardNum.slice(3, 7)}   {cardNum.slice(7, 11)}   {cardNum.slice(12, 16)}
                    </div>


                    <div className="card-info">
                        <div>
                            <span> Expires {expirationMonth}/{expirationYear}</span>
                        </div>

                        <div>
                            <span>  {bank}</span>
                        </div>
                    </div>

                    <div className="card-holder">
                        <span>  {owner}</span>
                    </div>


                </div>
            </div>
    );
}
// Footer


