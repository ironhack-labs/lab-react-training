//1. Import
import React, {Component} from "react";
import "../App.css";

// 2. Function || Class & Export
export default class Greetings extends Component {
translate = (text) =>{
    switch (this.props.lang) {
        case 'fr':
        return `Bonjour ${text}`
        case 'de':
        return `Hallo ${text}`
        case 'es':
        return `Hola ${text}`
        default:
        return `Hello ${text}`
    }
}
render(){
  return (
  <div className="greets">
  {this.translate(this.props.children)}
  </div>
  );
 }
}