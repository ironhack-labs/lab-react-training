import React, { Component } from 'react'

export class Carousel extends Component {
    state={
        count:0
    }
    toLeft = ()=>{
        this.state.count === 0? this.setState({count:3}) : this.setState({count:this.state.count-1})
    }
    toRight(){
        this.state.count === 3? this.setState({count:0}) : this.setState({count:this.state.count+1})
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.toLeft()}>Left</button>
                <img src={this.props.imgs[this.state.count]} />
                <button onClick={()=>this.toRight()}>Right</button>
            </div>
        )
    }
}

export default Carousel
