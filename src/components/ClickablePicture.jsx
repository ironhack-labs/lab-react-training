import { Component } from "react";

class ClickablePicture extends Component {
    state = {
        img: this.props.img
    }

    onClickImg = () => {
        this.setState ( (previousState) => {
            const img = previousState.img === this.props.img ? this.props.imgClicked : this.props.img;
            return {
                img: img
            }
        });
    }

    render () {
        return (<img onClick={this.onClickImg} src={this.state.img} alt="custom" />);
    }
}

export default ClickablePicture;