import React from 'react'
import './Dice.css'

class Dice extends React.Component {
    constructor(props){
        super(props);
        this.getRandomPic = this.getRandomPic.bind(this)
        this.setRandomPic = this.setRandomPic.bind(this)
        this.state = {
            img: `${this.getRandomPic()}`
        }
    }
    
    getRandomPic() {
        let randN = Math.floor(Math.random() * 6 + 1)        
        return `./img/dice${randN}.png`
    }

    setRandomPic() {

        let empty = './img/dice-empty.png'

        setTimeout((() => {
            this.setState({
                img: empty
            })
        }),1)

        setTimeout((() => {
            this.setState({
                img: this.getRandomPic()
            })
        }),1000)
    }

   

    //'./img/dice-empty.png'

    render() {
        return(
            <div className="img-container">
                <img src={this.state.img} className="dice" onClick={this.setRandomPic} alt=''/>
            </div>
        );
    }
}

export default Dice;