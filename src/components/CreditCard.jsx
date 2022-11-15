import React from 'react'

function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;

    let display = () => {
            let removedEl = number.slice(12, 16);
            let replaceEl = number
            .replaceAll('0', 'x')
            .replaceAll('1', 'x')
            .replaceAll('2', 'x')
            .replaceAll('3', 'x')
            .replaceAll('4', 'x')
            .replaceAll('5', 'x')
            .replaceAll('6', 'x')
            .replaceAll('7', 'x')
            .replaceAll('8', 'x')
            .replaceAll('9', 'x')
            
            let replaceSliced = replaceEl.slice(0,12)

            let mergeEl = replaceSliced.concat(removedEl);

          /*   for(let i=0; i< mergeEl.length; i+=4) {
                mergeEl.push(' ');
            }  */
            return mergeEl;  
            
    }


  return (
    <div style = {{ width:400, backgroundColor: '#11aa99'}}>
        <p>{type}</p>
        <p>{display()}</p>
        <p>Expires {expirationMonth}/{expirationYear} {bank} </p>
        <p>{owner}</p>
    </div>
  )
}

export default CreditCard