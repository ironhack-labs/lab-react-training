import react, { Component } from "react";
import SingleColorPicker from "../SingleColorPicker/SingleColorPicker";
import './RGBColorPicker.css'

class RGBColorPicker extends Component {
    state = {
        rValue: 0,
        gValue: 0,
        bValue: 0
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    render() {
        const { rValue, gValue, bValue } = this.state
        return (
            <div className="rgb">
                <div>
                    <SingleColorPicker color="r" value={rValue} onChange={this.handleChange} />
                    <SingleColorPicker color="g" value={gValue} onChange={this.handleChange} />
                    <SingleColorPicker color="b" value={bValue} onChange={this.handleChange} />
                </div>
                <div className="single-color">
                    <div className="box-color" style={{backgroundColor: `rgb(${rValue},${gValue},${bValue})`}}></div>
                    <p>rgb({rValue}, {gValue}, {bValue})</p>
                </div>
            </div>

        
        )
    }
}

export default RGBColorPicker