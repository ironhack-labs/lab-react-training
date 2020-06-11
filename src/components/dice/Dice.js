import React, { Component } from 'react';


class Dice extends Component {
    state = {
        img: '/img/dice3.png'
    }

    randomDice(){

        this.setState({
            img: '/img/dice-empty.png'
        })
        
        //arrow functions keep the this scope YASS
        setTimeout( () =>{

            const randomNumToSix = Math.floor(Math.random() * 6 +1 );
            const randomPath = `/img/dice${randomNumToSix}.png` ;

            this.setState({
                img: randomPath
            })
            //console.log(randomPath)

        }, 1000)

           
    }

    
    render() {
        return(
            <img 
                width="100px" 
                src={this.state.img} 
                alt="gaddam" 
                onClick={(e)=>this.randomDice(e)} 
                style={{cursor:'pointer', margin:'30px'}}
            />
        )
    }
    
}

export default Dice;