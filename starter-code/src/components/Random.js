import React, {Component} from "react";
import 'bulma/css/bulma.css'

class Random extends Component{
    constructor(props){
        super(props);
        this.state={
            randomNumber : 0
        }
    }
    setRandomNumber(){
        this.setState({
            randomNumber: this.randomNumber()
        })
        

    }
    randomNumber(max,min){
        let number= Math.floor(Math.random() * max ) + min;
        return number
    }

    render(){
        return(
            <input className="input" type="text" placeholder={`Random value between ${this.props.min} and ${this.props.max} =>  ${this.randomNumber(this.props.max, this.props.min)} `} min={this.props.min} max={this.props.max}  />
        )
    }
}

export default Random