import React, { Component } from 'react'

class Dice extends Component {

    state = {
        actual: '/img/dice-empty.png',

    }

    sort = () => {
        this.changeImg()
        setTimeout(() => {
            this.changeImg()

        }, 700);
    }
    changeImg = () => {
        let ale = Math.floor(Math.random() * 6) + 1
        console.log(ale)
        switch (ale) {
            case 1:
                this.setState({ actual: '/img/dice1.png' })
                console.log(1)
                break;

            case 2:
                this.setState({ actual: '/img/dice2.png' })
                console.log(2)

                break
            case 3:
                this.setState({ actual: '/img/dice3.png' })
                console.log(3)

                break
            case 4:
                this.setState({ actual: '/img/dice4.png' })
                console.log(4)

                break
            case 5:
                this.setState({ actual: '/img/dice5.png' })
                console.log(5)

                break
            case 6:
                this.setState({ actual: '/img/dice6.png' })
                console.log(6)

                break
            default:
                this.setState({ actual: '/img/dice-empty.png' })
        }


    }
    render() {

        return (
            <div className="container">

                <img className="imgdice" alt="img" onClick={this.sort} src={this.state.actual}>

                </img>
            </div>
        )
    }

}
export default Dice