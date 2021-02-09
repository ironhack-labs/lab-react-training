import React from 'react'; 

// function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
//     const style = {
//         backgroundColor: bgColor, 
//         color: color, 
//     }

//     let slicedCard = number.slice(12)
//     let symb = "⚫"
//     let encNum = symb.repeat(12) + slicedCard

//     return (
//         <div style={style}>
//             <p>{type}</p>
//             <p>{encNum}</p>
//             <p>{expirationMonth}/{expirationYear}</p>
//             <p>{bank}</p>
//             <p>{owner}</p>
//         </div>
//     )
// }

// export default CreditCard;

class CreditCard extends React.Component {
    constructor(props) {
        super(props);
        this.type = props.type;
        this.number = props.number;
        this.expirationMonth = props.expirationMonth;
        this.expirationYear = props.expirationYear;
        this.bank = props.bank;
        this.owner = props.owner;
        this.backgroundColor = props.bgColor;
        this.color = props.color;
    }

    setStyle() {
        let style = {backgroundColor: this.backgroundColor, color: this.color}
        return style
    }

    setEncrNum() {
    let slicedCard = this.number.slice(12)
    let symb = "⚫"
    let encNum = symb.repeat(12) + slicedCard  
    return encNum      
    }

    render() {
        return (
            <div style={this.setStyle()}>
                <p>{this.type}</p>
                <p>{this.setEncrNum()}</p>
                <p>{this.expirationMonth}</p>
                <p>{this.expirationYear}</p>
                <p>{this.bank}</p>
                <p>{this.owner}</p>
                
            </div>
        )
    }
}

export default CreditCard;