import React, { Component } from 'react'

export default class Carousel extends Component {
    state = {
        img: this.props.imgs[0],
        count: 0
    }
    nextImg = (direction) => {
        let countSetState = 0;
        if (direction == "right") {
            this.state.count < this.props.imgs.length-1 ? countSetState = this.state.count + 1 : countSetState = 0
        }
        if (direction == "left") {
            this.state.count > 0 ? countSetState = this.state.count - 1 : countSetState = this.props.imgs.length-1
        }
        let imgSetState = this.props.imgs[countSetState]
        this.setState({
            count: countSetState,
            img: imgSetState
        })
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <button onClick={()=>this.nextImg("left")}>left</button>
                <img alt="" style={{width: "100px"}}src={this.state.img}/>
                <button onClick={()=>this.nextImg("right")}>right</button>
            </div>
        )
    }
}
