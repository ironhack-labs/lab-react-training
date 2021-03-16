import React, { Component } from 'react'

export default class Caroussels extends Component {
    state={
        counter: 0,
        img:this.props.imgs[0]
    }

    HandleClick=()=>{
        this.setState({counter : this.state.counter +1})
        console.log(this.state.counter)
        this.setState({img : this.props.imgs[this.state.counter%4]})
    }
    render() {
        return (
            <div>
                <img onClick={this.HandleClick} src={this.state.img} alt=''/>

            </div>
        )
    }
}
