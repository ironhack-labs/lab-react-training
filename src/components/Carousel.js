import React from 'react'

class Carousel extends React.Component{

    state = {
        index: 0
    }

    render(){
        return (
            <div className="Carousel">
                <button onClick={()=>this.state.index === 0 ? this.setState({index: 3}) : this.setState({index: this.state.index - 1})}>Prev</button>
                <img src={this.props.imgs[this.state.index]} alt={this.props.imgs[this.state.index]} />
                <button onClick={()=>this.state.index === 3 ? this.setState({index: 0}) : this.setState({index: this.state.index + 1})}>Next</button>
            </div>
        )
    }
}

export default Carousel