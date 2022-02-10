import { Component } from 'react'


class Dice extends  Component {

    
    state = {
        emptyDice: './assets/images/dice-empty.png'
    }
 
    randomDice () {
     this.setState((state, props) => {
       
        const dices = ['../../assets/images/dice1.png','../../assets/images/dice2.png','../../assets/images/dice3.png','../../assets/images/dice4.png']  
       
        setTimeout(() => {
        const randomDice = Math.floor(Math.random() * dices.length)
       }, 2000);

       return { emptyDice: state.emptyDice, randomDice }
        
       

     })
    }
    


    render () {
        
        return(
            <div>
                <img  src={emptyDice} alt="" />
            </div>
        )
    }
}


export default Dice















    //const Dices = ['../../assets/images/dice1.png','../../assets/images/dice2.png','../../assets/images/dice3.png','../../assets/images/dice4.png']  
    // let randomDice = Math.floor(Math.random() *(4 - 0 ) + 0) 