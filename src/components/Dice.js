import React from 'react'



class Dice extends React.Component{

    state = {
        diceNumber: 1
    }

    rollDice(){
        const randomNumber = Math.floor(Math.random()*6)+1
        this.setState({diceNumber: 0})
        setTimeout(()=>{
            this.setState({diceNumber: randomNumber})
        },1000)
        
    }

    render(){
        return (
            <div className="Dice">
                    <button onClick={()=>this.rollDice()}><img src={process.env.PUBLIC_URL + `/img/dice${this.state.diceNumber}.png`} alt="dice" className="dice"/></button>
            </div>
        )
    }
}


export default Dice


// El estado es inmutable
// setState() -- Funcion que te da React para que puedas 'modificar' el state
// React detecta los cambio y cuando lo hace re-renderiza la pagina.