import { Component } from 'react'

class Carousel extends Component {
    state = {
        index: 0
    }
    
    swipeLeft = () => {        
        if (this.state.index > 0) {
            this.setState({
                index: this.state.index -1
            })
        } else if (this.state.index <= 0) {
            this.setState({
                index: this.props.images.length -1
            })
        }
    }
    
    swipeRight = () => {
        this.setState({
            index: this.state.index +1
        })

        if (this.state.index >= this.props.images.length -1) {
            this.setState({
                index: 0
            })
        }
    }
    
    render() {
        return(
        
            <div>
                <button onClick={this.swipeLeft}>Left</button>
                <img src={this.props.images[this.state.index]}/>
                <button onClick={this.swipeRight}>Right</button>
            </div>
        )
    }
}

export default Carousel