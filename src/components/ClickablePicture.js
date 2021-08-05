import { Component } from "react";


class ClickablePicture extends Component {
    state = {
        glasses: false,
    }

    handleClick = () => {
        this.setState({
            glasses: !this.state.glasses,
        })
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.glasses ? <img src={this.props.imgClicked} alt='no-glasses-pic'/> : <img src={this.props.img} alt='with-glasses-pic'/>} 
            </button>
        )
    }
}

export default ClickablePicture;