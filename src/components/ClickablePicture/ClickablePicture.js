import "./ClickablePicture.css"
import { Component } from "react"

class ClickablePicture extends Component {
    constructor (props) {
        super(props)

        this.state = {
            clicked: false
        }
    }

    changePicture = () => {
        if (this.state.clicked) {
            this.setState({
                clicked: false
            })
        } else {
            this.setState({
                clicked: true
            })
        }
    }

    render () {
        return (
            <div className="ClickablePicture" onClick={this.changePicture}>
                <img src={this.state.clicked ? this.props.imgClicked : this.props.img} />
            </div>
        )
    }
} 

export default ClickablePicture