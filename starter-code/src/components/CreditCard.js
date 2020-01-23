import React, { Component } from 'react'

export default class  extends Component {
    render() {

      const ccPics = {'Visa': "./img/visa.png", 'Master Card': './img/master-card.svg' }


        const mystyle1 = {
            display: "flex",
            flexDirection: "column",
            color: "black",
            backgroundColor: `${this.props.bgColor}` ,
            padding: "5px",
            fontFamily: "Arial",
            borderRadius: "8px",
            margin: "10px 10px 2px 10px",
            width: "500px",
            alignItems: "flex-end"
          };
          const imgStyle = {
            height : "auto",
            width : "128px",
            align: "right"
          };

          const pStyle = {
                padding: "0px",
                margin: "3px"
          };



        return (
            <div style = {mystyle1}>
                <p> </p> <img style={imgStyle} src={ccPics[this.props.type]} alt="irgendwas" />
                <p> <b>.... ..... .... </b>{this.props.number.toString().substr(-4)}</p>
                <p>Expires {this.props.expirationMonth}/{this.props.expirationYear}    {this.props.bank}</p>
                <p>{this.props.owner}</p>
                </div>

            
            
        )
    }
}
