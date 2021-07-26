import React,{ Component } from "react";


class Carousel extends Component {
    state = {
        index: 0,
    }

    handleOnClickLeft = () => {
        let newIndex = this.state.index;
        if (newIndex === 0) {
            newIndex = (this.props.imgs.length) - 1
        } else {
            newIndex -= 1;
        }
        this.setState ({   
            index: newIndex,
        })
        console.log(this.state.index)
    }

    handleOnClickRigh = () => {
        let newIndex = this.state.index;
        if (newIndex === this.props.imgs.length - 1) {
            newIndex = 0; 
        } else {
            newIndex += 1;
        }
        this.setState ({   
            index: newIndex,
        })
        console.log(this.state.index)
    }

    render() {
        return (
            <>
            <button onClick={this.handleOnClickLeft}>Left</button>
                <img src={this.props.imgs[this.state.index]} alt='pic'/>
            <button onClick={this.handleOnClickRigh}>Right</button>
            </>
        )
    }
}

export default Carousel;