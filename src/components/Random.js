import React, { Component } from 'react'

class Random extends Component {
    resultado = (min, max) => {
        let numPosibilidades = max - min
        let aleat = Math.random() * numPosibilidades
        aleat = Math.round(aleat)
        let final=parseInt(min) + aleat
        return final
    }

    render() {
        return (
            <div>
                <h4>Random value between {this.props.min} and {this.props.max} => 
                {this.resultado(this.props.min,this.props.max)} </h4>
            </div>
        )
    }
}

export default Random