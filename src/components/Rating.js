//Importaciones
import React, {Component} from "react";
import "../App.css";

//Class
export default class Rating extends Component {
    rate = () => {
        let redondeado = Math.floor(Number(this.props.children))
        switch (redondeado){
            case 1:
                return `★☆☆☆☆`
           case 2:
               return `★★☆☆☆`
           case 3:
               return `★★★☆☆`
           case 4:
               return `★★★★☆`
           case 5:
               return `★★★★★`
           default:
               return `☆☆☆☆☆`
        }
    }
    render(){
    return(
        <div>
         {this.rate()}
        </div>
    );
  }
}