//Importaciones
import React, {Component} from "react";
import "../App.css";

//Class
export default class BoxColor extends Component {
    render(){
        const style = {backgroundColor: `rgb(${this.props.r},${this.props.g},${this.props.b})`};

    return(
        <div className="box-color" style={style}>
         {`rgb(${this.props.r},${this.props.g},${this.props.b})`}
        </div>
    );
  }
}
