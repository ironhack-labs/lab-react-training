import React from 'react';
import "./Dice.css"


export default class Dice extends React.Component {
    state = {
        blank: false
    }

    shuffleDiceFace = (e) => {
        this.setState({
             blank: true 
            });

        setTimeout(() => this.setState({ blank: false }), 1000);
    }
        
    render(){

        let randomDiceFace = () => {
            if(this.state.blank === true){
                return `/img/dice-empty.png`
            }else{
            let face = Math.floor(Math.random()*6) + 1
            return `/img/dice${face}.png`
            }
        }

        return (
            <img src={randomDiceFace()} alt="Dice" className="Dice" onClick={this.shuffleDiceFace}></img>
        );
    }
}