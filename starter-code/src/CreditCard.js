import React, { Component } from 'react';
import "./index.css";

class CreditCard extends Component {

    render(){
        let textColor = this.props.type==='Visa' ? 'white' : 'black';

        let myCreditStyle = {
            backgroundColor: this.props.bgColor,
            height: '160px',
            width: 300,
            padding: 10,
            border: "1px solid black",
            borderRadius: 7,
            margin: 5,
            color: textColor
        }

        let textAlignCenter = {
            textAlign: "center"
        }

        return (  

             <div style={myCreditStyle}>
                 <div></div>
                 <div style={textAlignCenter}>{this.props.number}</div>
                 <div></div>

             </div>
        )

    }
}


export default CreditCard;