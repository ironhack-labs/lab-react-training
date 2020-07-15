import React, { Component } from 'react'

class LikeButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            click: 0,
            color: ""
        }
    }

    addClick = () => {
        this.setState({ click: this.state.click + 1 })
    }

    changeColor=()=>{
        const colores= ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
        this.setState({
            color: colores[Math.floor(Math.random() * colores.length)]
        })
    }

    render() {
        const buttonStyle={
            background: `${this.state.color}`
        }
        
        return (
            <div>
                <button style={buttonStyle} className="button-like" onClick={()=>{this.addClick();this.changeColor()}}>{this.state.click} Likes </button>
            </div>
        )
    }
}

export default LikeButton
