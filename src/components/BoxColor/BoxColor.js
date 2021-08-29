import "./BoxColor.css"
import { Component } from "react"

class BoxColor extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        let {r, g, b} = this.props

        const color = `rgb(${r}, ${g}, ${b})`

        const componentToHex = (c) => {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }
          
        const rgbToHex = (r, g, b) => {
            return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
        }

        return (
            <div style={{backgroundColor: color}} className="colorbox">
                <p>{color}</p>
                <p>{rgbToHex(r, g, b)}</p>
            </div>
        )
    }
}

export default BoxColor