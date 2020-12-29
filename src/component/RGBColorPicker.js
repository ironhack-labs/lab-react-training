import React, { Component } from 'react'
import SingleColorPicker from './SingleColorPicker'


export class RGBColorPicker extends Component {
        state = {
                rValue: 255,
                gValue: 255,
                bValue: 255,
        }
        onChange = (event) => {

                // if (this.props.color === "r") a = `rgb(${event.target.value}, 0, 0)`;
                // else if (this.props.color === "b") a = `rgb(0,${event.target.value}, 0)`;
                // else a = `rgb(0,0,${event.target.value})`;
                // this.setState({rgb:a})
                console.log(event.target.value)
                console.log(event.target.name)
                console.log(this.state)
                if (event.target.name === "r") this.setState({ rValue: event.target.value })
                else if (event.target.name === "g") this.setState({ gValue: event.target.value })
                else this.setState({ bValue: event.target.value })
        }
        render() {
                return (
                        <div>
                                <SingleColorPicker color="r" onChange={this.onChange} value={`rgb(${this.state.rValue},0,0`} />
                                <SingleColorPicker color="g" onChange={this.onChange} value={`rgb(0,${this.state.gValue},0`} />
                                <SingleColorPicker color="b" onChange={this.onChange} value={`rgb(0,0,${this.state.bValue}`} />
                                <SingleColorPicker color={`rgb(${this.state.rValue},${this.state.gValue},${this.state.bValue})`}
                                        onChange={this.onChange}
                                        value={`rgb(${this.state.rValue},${this.state.gValue},${this.state.bValue}`}
                                        rgb="rgb"
                                />
                        </div>
                )
        }
}

export default RGBColorPicker
