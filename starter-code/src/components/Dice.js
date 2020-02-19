import React, { Component } from 'react'

export default class Dice extends Component {
    state={
        number:'3'
    }
    
    GiveNewNumber=()=>{
        
        //delay con Date
       // const now = new Date().getTime();
       // while(new Date().getTime() < now + 1000){ } 

       const rndNum=Math.floor(Math.random()*(6)+1)
        setTimeout(() => {
            this.setState(()=>({
                number:rndNum
                 }))
         }, 1000); 

        this.setState(()=>({
            number:'0'
        }))
    }
    render() {
        return (
            <div className="Dice" >
                <img
                onClick={this.GiveNewNumber} src={`../img/dice${this.state.number}.png`} alt="dice"></img>
            </div>
        )
    }
}
