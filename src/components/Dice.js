import React from 'react'

class Dice extends React.Component{
    state = {
        diceNumber: 1
    }
    randomDice(){
        const randomNumber = Math.floor(Math.random() * 6) + 1
        this.setState({...this.state, diceNumber: '-empty' })
        setTimeout(()=>{
              this.setState({...this.state, diceNumber: randomNumber})
        }, 1000)
    }

    render() {
        return(
            <div className="ClickablePicture">
                <img onClick={() => this.randomDice()} src={process.env.PUBLIC_URL + `/img/dice${this.state.diceNumber}.png`} alt="dice"/>
            </div>
        )
    }
}

export default Dice

