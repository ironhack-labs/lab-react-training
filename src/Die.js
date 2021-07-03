import { Component } from "react";
import "./Die.css";

class Die extends Component {
    render() { 
        // use && logical operator
        return <i className={`Die fas fa-dice-${this.props.num} ${this.props.rolling && 'Die_rolling'}`} ></i>;
    }
}
 
export default Die;