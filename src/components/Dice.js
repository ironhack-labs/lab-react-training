import React, { Component } from 'react'

export default class Dice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            diceNumber: this.randomDice()
        }
        this.changeDice = this.changeDice.bind(this)//El valor de this es ignorado cuando la función es llamada con el operador new.


    }

    randomDice = () => {
        return 1 + Math.floor(6 * Math.random())
    }


    changeDice() {
        if (this.state.diceNumber) {
            this.setState(number => ({
                diceNumber: null
            }))
            setTimeout(() => {
                this.setState(number => ({
                    diceNumber: this.randomDice()
                }))
            }, 1000)
        }
    }

    render() {
        let imgSrc = '';
        if(this.state.diceNumber){
            imgSrc=`/img/dice${this.state.diceNumber}.png`
        } else {
            imgSrc=`/img/dice-empty.png`

        }
        return (
            <div>
                <img onClick={this.changeDice} src={imgSrc} />
            </div>
        )
    }
}
