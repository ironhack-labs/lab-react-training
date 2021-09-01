import "./Carousel.css"
import { Component } from "react"

class Carousel extends Component {
    constructor (props) {
        super(props)

        this.state = {
            selectedImgIndex: 0,
        }
    }

    onLeft = () => {
        const newPosition = this.state.selectedImgIndex === 0 ? this.props.imgs.length - 1 : Math.abs((this.state.selectedImgIndex - 1))%this.props.imgs.length
        this.setState({
            selectedImgIndex: newPosition
        })
    }

    onRight = () => {
        const newPosition = Math.abs((this.state.selectedImgIndex + 1))%this.props.imgs.length
        this.setState({
            selectedImgIndex: newPosition
        })
    }

    render () {
        const selectedImg = this.props.imgs.filter((el, ind) => {
            return ind===this.state.selectedImgIndex
        })

        return (
            <div className="Carousel">
                <img src={selectedImg} />
                <div>
                    <button className="btn btn-secondary" onClick={this.onLeft} id="left">Left</button>
                    <button className="btn btn-secondary" onClick={this.onRight} id="right">Right</button>
                </div>
            </div>
        )
    }
}

export default Carousel