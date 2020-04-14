import React, { Component } from 'react'

class Like extends Component {
    state = { contador: 0 };
    rgb = "gray"
    inc = () => {

        this.setState({ contador: this.state.contador + 1 })

        this.rgb = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
        this.ale = Math.floor(Math.random() * this.rgb.length);
        this.style = {
            backgroundColor: this.rgb[this.ale]
        }
    }


    render() {
        return (
            <div className="container">

                <button style={this.style} onClick={this.inc} className="buttonlike">Like {this.state.contador} </button>

            </div>
        )
    }
}

export default Like