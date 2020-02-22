import React, { Component } from 'react'

class Carousel extends Component {
    state = {
        click: 1
        
    }

    handleChangeUp = (e) => { 
        this.setState({click: 2})
    }

    handleChangeDown = (e) => { 
        this.setState({click: 1})
    }


    render() {
        return (
            <div className="Carousel">
                <button onClick={this.handleChangeDown}>Left</button>
                {
                    this.state.click == 1 ?
                    <img alt="carousel" src="https://randomuser.me/api/portraits/women/2.jpg" height="100px" />  
                    :
                    this.state.click == 2?
                    <img alt="carousel" src="https://randomuser.me/api/portraits/men/2.jpg" height="100px" /> 
                    :
                    this.state.click == 3 ?
                    <img alt="carousel" src="https://randomuser.me/api/portraits/women/1.jpg" height="100px" /> 
                    :
                    <img alt="carousel" src="https://randomuser.me/api/portraits/men/1.jpg" height="100px" />
                }
                <button onClick={this.handleChangeUp}>Right</button>
            </div>
        )
    }
}

export default Carousel;