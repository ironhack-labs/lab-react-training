import React from 'react';


class Dice extends React.Component{
    constructor(props){
        super(props) 
        let random = Math.ceil(Math.random() * 6)
        let source = "./img/dice" + random + ".png"
        this.state = {
            source: source
        }
    }

    handleRandom = () => {
        this.setState ({
            source: "./img/dice-empty.png"
        })
        let random = Math.ceil(Math.random() * 6)
        let source = "./img/dice" + random + ".png"
        setTimeout(() => {
            this.setState({
                source: source
            })
        }, 1000)
        

    }
    
    render() {
        return (
        <div>
            <img onClick={this.handleRandom} src={this.state.source} width="100px" alt="Dice"/>
        </div>
        )
    }
}

export default Dice