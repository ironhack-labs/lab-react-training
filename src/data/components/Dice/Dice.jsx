import React from 'react';

function randomNumber() {
    return Math.ceil(Math.random() * 5)
}
export default class Dice extends React.Component {
    state = {
        randomNum: randomNumber()
    }

    getRandomNumber = () => {
        this.setState({ randomNum: '-empty'});
        
        setTimeout(() => {
            this.setState({ randomNum: randomNumber()});
        }, 1000)
    }

    render() {
        return (
            <div style={{width: '100px', height: '100px', margin: '20px auto'}}  onClick={this.getRandomNumber}>
                <img 
                    style={{width: '100px', height: '100px'}} 
                    src={`/img/dice${this.state.randomNum}.png`} 
                    alt="dice"
                />
            </div>
        )
    }
}