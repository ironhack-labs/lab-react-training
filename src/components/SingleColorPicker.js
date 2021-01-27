import React from 'react'

class SingleColorPicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: '255'
        }
    }

    handleChange = (e) => {
        this.setState({ number: e.target.value })
    }

    selectColor() {
        if (this.props.color === 'r') {
            return `rgb(${this.state.number}, 0, 0)`
        }

        if (this.props.color === 'g') {
            return `rgb(0, ${this.state.number}, 0)`
        }

        if (this.props.color === 'b') {
            return `rgb(0, 0, ${this.state.number})`
        }
    }

    render() {
        return (
            <div>
                <div style={{ backgroundColor: this.selectColor(), width: 50, height: 50 }}></div>
                <form>
                    <label>{this.props.color}</label>
                    <input type="number" min="0" max="255" onChange={this.handleChange} value={this.state.number} name="number" />
                </form>
            </div>
        )
    }
}

export default SingleColorPicker;