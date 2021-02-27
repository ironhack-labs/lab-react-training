import { Component } from "react";

class ClickablePicture extends Component {
    state = {
        clicked: false,
    }
    switch = () => {
        this.setState((state) => ({
            clicked: state.clicked ? false : true
        }))
    }

    render() {
        const { clicked } = this.state;
        const { img, imgClicked, className } = this.props;
        return (
            <img
                onClick={() => this.switch()}
                className={`clickable-picture ${className}`}
                src={clicked ? imgClicked : img} />
        )
    }
}

export default ClickablePicture;