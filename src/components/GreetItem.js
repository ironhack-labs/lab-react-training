import React from 'react'

class GreetItem extends React.Component {
    constructor({lang}) {
        super({lang})
        this.state = {
            greet: lang
        }
    }
    state = {
        greet: 'Hello'
    }

    handleLanguageClick = () => {
        if (this.state.greet === 'Hola') {
            return (
                this.setState({
                    greet: 'Hello'
                })
            )
        }
        this.setState({
            greet: 'Hola'
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleLanguageClick}> Lang </button>
                <p>{this.state.greet}</p>
            </div>
        )
    }
}

export default GreetItem
