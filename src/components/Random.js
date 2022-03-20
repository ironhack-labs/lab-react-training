import React, { Component } from "react"

class Random extends Component {
    state = {}
    render() {
        const { min, max } = this.props
        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        return (
            <div>
                Random: {randomIntFromInterval(min, max)}
            </div>
        )
    }
}

export default Random;