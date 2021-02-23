import React, { Component } from 'react'

export default class Dice extends Component {
    state = {
        pictureNumber : Math.ceil(Math.random()*6)
    }

    click = () => {
        this.setState((state,props) => ({
            pictureNumber : 0
        }))
        
        setTimeout(() => {this.setState({ pictureNumber : Math.ceil(Math.random()*6) })}, 1000)
    }

    render() {
        if(this.state.pictureNumber === 0) {
            var image = '/img/dice-empty.png'
        } else {
            image = `/img/dice${this.state.pictureNumber}.png`
        }

        return (
            <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", padding:"10px", margin:"10px", border:"solid 2px black"}}>
                <img src={image} alt="" style={{width: "200px", margin:"10px"}} onClick={this.click}/>
            </div>
        )
    }
}
