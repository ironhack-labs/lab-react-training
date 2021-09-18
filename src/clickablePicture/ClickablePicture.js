import React, {Component} from 'react';
import './ClickablePicture.css';

class ClickablePicture extends Component {

    state = {
        glasses: false
    };

    handleClick = () => {
        if (this.state.glasses === false) {
            this.setState({
                clicked: true
            })
        } else {
            this.setState({
                clicked: false
            })
        }
    };

    render () {

        let user = () => {
            if (this.state.glasses === true) {
                return this.props.imgClicked
            } else {
                return this.props.img
            }
        }
        return (
            <div className="clickable-picture">
                <img src={user()} onClick={this.handleClick} alt="user" />
            </div>
        )
    }
}

export default ClickablePicture;