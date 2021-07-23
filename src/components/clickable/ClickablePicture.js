import { Component } from 'react';

class Clickable extends Component {

    state = {
        visible: false,
    
    }

    handlePicture() {
        this.setState((state) => ({
            visible: !state.visible
        }))
    }

    render() {

        return (
            <div>
                <img src={!this.state.visible ? this.props.imgClicked : this.props.img} alt="guy" onClick={() => this.handlePicture()}></img>
            </div>

        )
    }

}

export default Clickable