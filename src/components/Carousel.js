import React, { Component } from 'react'

export default class Carousel extends Component {
    state = {
        position: 0
    }

    previous = () => {
        if(this.state.position > 0)
        this.setState((state, props) => ({
            position: state.position - 1
        }))
    }

    next = () => {
        if(this.state.position < 3) {
            this.setState((state, props) => ({
                position: state.position + 1
            }))
        }
    }

    render() {
        return (
            <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", padding:"10px", margin:"10px", border:"solid 2px black"}}>
                <img src={this.props.imgs[this.state.position]} alt="" style={{width:"200px", margin:"10px"}}/>
                <div><button onClick={this.previous}>previous</button><button onClick={this.next}>next</button></div>
            </div>
        )
    }
}
