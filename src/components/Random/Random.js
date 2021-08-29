import "./Random.css"
import { Component } from "react"

class Random extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        let randomNum = Math.round(Math.random()*(Number(this.props.max) - Number(this.props.min)) + Number(this.props.min))
        let symbol = "=>"
        return (
            <div className="random">
                <p>Random value between {this.props.min} and {this.props.max} {symbol} {randomNum}</p>
            </div>
        )
    }
}

export default Random