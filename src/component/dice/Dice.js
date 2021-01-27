import React, { Component } from 'react'


class Dice extends Component {
    constructor(props){
        super(props)
        this.state={
            diceImg:''
        }
    }
    
    getRandomImage = () => {
        const diceArray = [
                '/img/dice/dice1.png',
                '/img/dice/dice2.png',
                '/img/dice/dice3.png',
                '/img/dice/dice4.png',
                '/img/dice/dice5.png',
                '/img/dice/dice6.png']
        
        const randomNumber = Math.floor(Math.random() * (5 - 0 + 1)) + 0
        
        this.setState({
            diceImg: diceArray[randomNumber]
        });
    }   

    componentDidMount() {
        this.getRandomImage()
        console.log(this.state.diceImg);
      }

    handleDiceClick = () =>{
        setTimeout(()=>{
            this.setState({
                diceImg:'/img/dice/dice-empty.png'
            })
        },1)
        
        setTimeout(()=>{ 
            this.getRandomImage() 
        },1000)
    }
    

    render() {
        return (
            <div>
                <img className="image is-96x96" src={this.state.diceImg} alt='dice' onClick={this.handleDiceClick}/>
            </div>
        )
    }
}

export {Dice}