import React, { Component } from 'react';


class Dice extends Component {
    
    state = {
        clicked: false,
        loading: false
    }

    handleClick = () => {
        setTimeout(() => {
            this.setState({clicked: !this.state.clicked, loading: false});
        }, 1000)
        this.setState(
            {loading : true}
        );
    }

    render() {
        return (
            <img className="Dice" 
                onClick={this.handleClick}
                src={this.state.loading ?
                    "/img/dice-empty.png"
                    : this.state.clicked ? 
                        "/img/dice6.png"
                        : "/img/dice3.png"} 
                alt="Dice"/>
        );
    }
};
    
export default Dice;