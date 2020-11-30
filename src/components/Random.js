//1. Import
import React, {Component} from "react";
import "../App.css";

// 2. Function || Class & Export
export default class Random extends Component {
   valorAleatorio = () =>{
    return Math.floor(Math.random()*(this.props.max-this.props.min+1))
   }
render(){
    return(
  <div className="random">
      {`Random value between ${this.props.min} and ${this.props.max}=>
      ${this.valorAleatorio()}`}
</div>
    );
 }
}