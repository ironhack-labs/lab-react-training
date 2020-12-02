import React, { Component } from 'react'

export default class Dice extends Component {

    state = {
        clicked:false,
        randomIndex:Math.floor(Math.random()*5+1),
        randomPictures: ['/img/dice-empty.png','/img/dice1.png','/img/dice2.png','/img/dice3.png','/img/dice4.png','/img/dice5.png','/img/dice6.png']
    }

    clickedRandomPic = ()=>{
        let random=Math.floor(Math.random()*5+1);
        
        this.setState({
            clicked:!this.state.clicked,
            randomIndex:0
        })
        setTimeout(()=>{
            if(this.state.clicked)
            random=Math.floor(Math.random()*5+1)
            // console.log('hi')
                this.setState({
                    randomIndex:random
                })
                console.log(random)
        },500)

    }

    render() {
        return (
            <div>
                <img onClick={this.clickedRandomPic} style={{width:'100px',height:'100px'}}src={this.state.randomPictures[this.state.randomIndex]} alt=""/>
            </div>
        )
    }
}
